<!-- 공통 레이아웃 -->
<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- 네비게이션 바 - 모든 페이지에서 보임 -->
<nav>
	<h1><a href="/">게시판</a></h1>
	<a href="/write">글쓰기</a>
</nav>

{#key $page.url.pathname}
	<main in:fade={{ delay: 150, duration: 300 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<!-- 네비게이션 바에만 적용-->
<style>
	nav {
		background: #f8f9fa;
		padding: 1rem;
		border-bottom: 1px solid #dee2e6;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav h1 {
		margin: 0;
	}

	nav a {
		color: #333;
		font-weight: bold;
		text-decoration: none;
	}

	nav a:hover {
		color: #007bff;
	}

	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}
</style>
