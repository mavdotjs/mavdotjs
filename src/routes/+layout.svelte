<script lang="ts">
	import '../app.css';
	import '$lib/pages';
	let { children } = $props();
</script>
<div class="my-2 gap-x-1 flex items-center">
		<img src="/pfp" class="size-16 rounded-full inline" alt="">
		<h1 class="font-bold">kai.</h1>
		<a class="btn" href='/'>Home</a>
		<a class="btn" href='/blog'>Blog</a>
		<a class="btn" href='/contact'>Contact</a>
</div>
{@render children()}