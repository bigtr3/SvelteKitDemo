<script>
	export let form;
</script>

<form method="POST">
	<input name="name" placeholder="이름" />
	<button type="submit">제출</button>
</form>

{#if form}
	<p>서버 응답: {form.result}</p>
{/if}
