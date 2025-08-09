<script>
	import favicon from '$lib/assets/favicon.svg';
	import { count } from '$lib/stores';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- 네비게이션 바 - 모든 페이지에서 보임 -->
<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/blog/1">Blog 1</a>
</nav>

<p>전체 클릭 수 : {$count}</p>

<slot />

<!--여기에 각 페이지 내용을 넣음-->

<!-- 네비게이션 바에만 적용-->
<style>
	nav {
		background: #eee;
		padding: 1rem;
	}
	a {
		margin-right: 1rem;
		text-decoration: none;
	}
</style>
