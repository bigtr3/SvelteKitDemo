<!-- 공통 레이아웃 -->
<script>
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- 네비게이션 바 - 모든 페이지에서 보임 -->
<nav>
	<a href="/">Home</a>
</nav>

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
