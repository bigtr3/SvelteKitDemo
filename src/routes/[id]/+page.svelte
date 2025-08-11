<!-- 게시글 상세보기 -->
<script>
	// 서버에서 전달받은 데이터
	export let data;

	// 날짜 포맷 함수
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('ko-KR') + ' ' + date.toLocaleTimeString('ko-KR');
	}
</script>

<svelte:head>
	<title>{data.post.title} - 게시판</title>
</svelte:head>

<article class="post">
	<header class="post-header">
		<h1>{data.post.title}</h1>
		<div class="post-info">
			<span>작성자: {data.post.author}</span>
			<span>작성일: {formatDate(data.post.createdAt)}</span>
			{#if data.post.createdAt !== data.post.updatedAt}
				<span>수정일: {formatDate(data.post.updatedAt)}</span>
			{/if}
		</div>
	</header>

	<div class="post-content">
		{data.post.content}
	</div>

	<footer class="post-footer">
		<a href="/" class="btn btn-secondary">목록으로</a>
	</footer>
</article>

<style>
	.post {
		max-width: 800px;
		margin: 0 auto;
	}

	.post-header {
		border-bottom: 2px solid #007bff;
		padding-bottom: 1rem;
		margin-bottom: 2rem;
	}

	.post-header h1 {
		margin: 0 0 1rem 0;
		color: #333;
		line-height: 1.3;
	}

	.post-info {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		color: #666;
		font-size: 0.9rem;
	}

	.post-content {
		line-height: 1.8;
		font-size: 1.1rem;
		margin-bottom: 3rem;
		white-space: pre-wrap; /* 줄바꿈 보존 */
	}

	.post-footer {
		text-align: center;
		padding-top: 2rem;
		border-top: 1px solid #eee;
	}

	.btn {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		text-decoration: none;
		font-weight: bold;
		transition: background-color 0.2s;
	}

	.btn-secondary {
		background: #6c757d;
		color: white;
	}

	.btn-secondary:hover {
		background: #545b62;
	}

	@media (max-width: 768px) {
		.post {
			padding: 1rem;
		}

		.post-info {
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
