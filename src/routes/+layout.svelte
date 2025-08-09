<script>
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- 네비게이션 바 - 모든 페이지에서 보임 -->
<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
</nav>

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
