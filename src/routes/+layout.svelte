<script>
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';
	import { count } from '$lib/stores';
	import { fade } from 'svelte/transition';
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

<!-- key 블록으로 page.url.pathname 기준으로 페이지 전환 감지 -->
{#key $page.url.pathname}
	<div in:fade={{ delay: 150, duration: 300 }} out:fade={{ duration: 150 }}>
		<slot />
	</div>
{/key}

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
