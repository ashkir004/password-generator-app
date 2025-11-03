<script>
	import favicon from '$lib/assets/favicon-32x32.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style global>

	:global(html), :global(body) {
		background: var(--gradient);
		height: 100vh;
		color: white;
	}

	:global(*), :global(*:before), :global(*:after) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		--white: #FFFFFF;
		--black: #000000;
		--grey-950: #08070B;
		--grey-900: #14131B;
		--grey-850: #18171F;
		--grey-800: #24232C;
		--grey-700: #54535B;
		--grey-600: #817D92;
		--grey-200: #E6E5EA;
		--green-200: #A4FFAF;
		--yellow-300: #F8CD65;
		--orange-400: #FB7C58;
		--red: #F64A4A;
		--gradient: linear-gradient(var(--grey-900), var(--grey-950));

		--sp-100: calc(8 / 16 * 1rem);
		--sp-200: calc(16 / 16 * 1rem);
		--sp-300: calc(24 / 16 * 1rem);
		--sp-400: calc(32 / 16 * 1rem);
		--sp-700: calc(56 / 16 * 1rem);
		--sp-1000: calc(80 / 16 * 1rem);
		--sp-1300: calc(104 / 16 * 1rem);
		--sp-1600: calc(128 / 16 * 1rem);
		--sp-2000: calc(160 / 16 * 1rem);
		--sp-2200: calc(176 / 16 * 1rem);
		--sp-2300: calc(184 / 16 * 1rem);

	}

	@font-face {
		font-family: "JetBrainsMonoBold";
		src:
			url("/assets/JetBrainsMono-Bold.ttf");
		font-weight: bold;
	}

	:global(.text-preset-1) {
		font-family: "JetBrainsMonoBold";
		font-size: calc(32 / 16 * 1rem);
		line-height: calc(42 / 16 * 1rem);
	}

	:global(.text-preset-2) {
		font-family: "JetBrainsMonoBold";
		font-size: calc(24 / 16 * 1rem);
		line-height: calc(32 / 16 * 1rem);
	}

	:global(.text-preset-3) {
		font-family: "JetBrainsMonoBold";
		font-size: calc(18 / 16 * 1rem);
		line-height: calc(24 / 16 * 1rem);
	}
	
	:global(.text-preset-4) {
		font-family: "JetBrainsMonoBold";
		font-size: calc(16 / 16 * 1rem);
		line-height: calc(20 / 16 * 1rem);
	}

</style>