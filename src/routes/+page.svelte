<script>
	import { count } from '$lib/stores';

	function increment() {
		count.update((n) => n + 1);
	}

	export let data;
</script>

<h1>메인 페이지</h1>
<p>서버에서 받은 메세지:{data.message}</p>

<button on:click={increment}> 클릭 +1 </button>

<a href="/about">Go to about</a>

<style>
	p {
		font-size: 2rem;
	}
</style>
