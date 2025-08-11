<!--글수정 페이지-->
<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	// 서버에서 전달받은 데이터
	export let data;
	export let form; // 에러 메세지 등

	let loading = false;

	// 폼 제출 시 로딩 상태 관리
	function handleSubmit() {
		loading = true;
		return async ({ result }) => {
			loading = false;
			if (result.type === 'redirect') {
				goto(result.location);
			}
		};
	}

	// 취소 버튼
	function goBack() {
		goto(`/${data.post.id}`);
	}
</script>

<svelte:head>
	<title>게시글 수정 - {data.post.title}</title>
</svelte:head>

<div class="edit-container">
	<h2>게시글 수정하기</h2>

	{#if form?.error}
		<div class="error">
			{form.error}
		</div>
	{/if}

	<form method="POST" action="?/update" use:enhance={handleSubmit}>
		<div class="form-group">
			<label for="title">제목</label>
			<input
				type="text"
				id="title"
				name="title"
				value={data.post.title}
				required
				disabled={loading}
			/>
		</div>

		<div class="form-group">
			<label for="author">작성자</label>
			<input
				type="text"
				id="author"
				name="author"
				value={data.post.author}
				required
				disabled={loading}
			/>
		</div>

		<div class="form-group">
			<label for="content">내용</label>
			<textarea id="content" name="content" required rows="10" disabled={loading}
				>{data.post.content}</textarea
			>
		</div>

		<div class="form-actions">
			<button type="button" on:click={goBack} disabled={loading}> 취소 </button>
			<button type="submit" disabled={loading}>
				{loading ? '수정 중...' : '수정완료'}
			</button>
		</div>
	</form>
</div>

<style>
	.edit-container {
		max-width: 600px;
		margin: 0 auto;
	}

	h2 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.error {
		background: #f8d7da;
		color: #721c24;
		padding: 1rem;
		border-radius: 4px;
		margin-bottom: 1rem;
		border: 1px solid #f5c6cb;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
		color: #333;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
		font-family: inherit;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #007bff;
		box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
	}

	input:disabled,
	textarea:disabled {
		background-color: #f8f9fa;
		cursor: not-allowed;
	}

	textarea {
		resize: vertical;
		min-height: 200px;
	}

	.form-actions {
		display: flex;
		gap: 1rem;
		justify-content: flex-end;
	}

	button {
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	button[type='button'] {
		background: #6c757d;
		color: white;
	}

	button[type='button']:hover:not(:disabled) {
		background: #545b62;
	}

	button[type='submit'] {
		background: #007bff;
		color: white;
	}

	button[type='submit']:hover:not(:disabled) {
		background: #0056b3;
	}

	button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>
