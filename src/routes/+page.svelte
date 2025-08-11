<!--홈페이지 (게시글 목록)-->
<script>
	// 서버에서 전달받은 데이터
	export let data;

	// 날짜 포맷 함수
	function formatDate(dateString) {
		const date = new Date(dateString);
		return (
			date.toLocaleDateString('ko-KR') +
			' ' +
			date.toLocaleTimeString('ko-KR', {
				hour: '2-digit',
				minute: '2-digit'
			})
		);
	}
</script>

<svelte:head>
	<title>게시판 - 홈</title>
</svelte:head>

<div class="header">
	<h2>게시글 목록</h2>
	<p>총 {data.posts.length}개의 게시글</p>
</div>

{#if data.posts.length === 0}
	<div class="empty">
		<p>아직 게시글이 없습니다.</p>
		<a href="/write" class="btn">첫 게시글 작성하기</a>
	</div>
{:else}
	<div class="post-list">
		{#each data.posts as post}
			<article class="post-item">
				<h3><a href="/{post.id}">{post.title}</a></h3>
				<div class="post-meta">
					<span>작성자: {post.author}</span>
					<span>{formatDate(post.createdAt)}</span>
				</div>
				<p class="post-preview">
					{post.content.slice(0, 100)}{post.content.length > 100 ? '...' : ''}
				</p>
			</article>
		{/each}
	</div>
{/if}

<style>
	.header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.header h2 {
		margin-bottom: 0.5rem;
	}

	.header p {
		color: #666;
		margin: 0;
	}

	.empty {
		text-align: center;
		padding: 3rem;
		background: #f8f9fa;
		border-radius: 8px;
	}

	.btn {
		display: inline-block;
		background: #007bff;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		text-decoration: none;
		margin-top: 1rem;
	}

	.btn:hover {
		background: #0056b3;
	}

	.post-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.post-item {
		background: white;
		border: 1px solid #dee2e6;
		border-radius: 8px;
		padding: 1.5rem;
		transition: box-shadow 0.2s;
	}

	.post-item:hover {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.post-item h3 {
		margin: 0 0 0.5rem 0;
	}

	.post-item h3 a {
		color: #333;
		text-decoration: none;
	}

	.post-item h3 a:hover {
		color: #007bff;
	}

	.post-meta {
		display: flex;
		justify-content: space-between;
		color: #666;
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	.post-preview {
		color: #666;
		line-height: 1.6;
		margin: 0;
	}
</style>
