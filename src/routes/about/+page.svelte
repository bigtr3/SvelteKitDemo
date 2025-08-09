<script>
	import { count } from '$lib/stores';

	function increment() {
		count.update((n) => n + 1);
	}
</script>

<h1>About 페이지</h1>

<button on:click={increment}> 클릭 +1 (About) </button>
