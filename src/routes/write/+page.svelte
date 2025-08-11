<!--글쓰기 페이지-->
<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	// 서버에서 전달받은 데이터 (에러 등)
	export let form;

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
</script>

<svelte:head>
	<title>글쓰기 - 게시판</title>
</svelte:head>

<div class="write-container">
	<h2>새 게시글 작성</h2>

	{#if form?.error}
		<div class="error">
			{form.error}
		</div>
	{/if}

	<form method="POST" action="?/create" use:enhance={handleSubmit}>
		<div class="form-group">
			<label for="title">제목</label>
			<input
				type="text"
				id="title"
				name="title"
				required
				placeholder="제목을 입력하세요"
				disabled={loading}
			/>
		</div>

		<div class="form-group">
			<label for="author">작성자</label>
			<input
				type="text"
				id="author"
				name="author"
				required
				placeholder="작성자 이름을 입력하세요"
				disabled={loading}
			/>
		</div>

		<div class="form-group">
			<label for="content">내용</label>
			<textarea
				id="content"
				name="content"
				required
				placeholder="내용을 입력하세요"
				rows="10"
				disabled={loading}
			></textarea>
		</div>

		<div class="form-actions">
			<button type="button" on:click={() => history.back()} disabled={loading}> 취소 </button>
			<button type="submit" disabled={loading}>
				{loading ? '작성 중...' : '작성완료'}
			</button>
		</div>
	</form>
</div>

<style>
	.write-container {
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
