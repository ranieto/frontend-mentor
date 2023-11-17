<div class="app">
	<slot />
</div>

<style>
	@font-face {
		font-family: Outfit;
		font-weight: 400;
		src:
			local("Outfit Regular"),
			url("/src/lib/assets/fonts/Outfit-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: Outfit;
		font-weight: 700;
		src:
			local("Outfit Bold"),
			url("/src/lib/assets/fonts/Outfit-Bold.woff2") format("woff2");
	}

	.app {
		--white: oklch(100% 0 0deg);
		--light-gray: oklch(90.83% 0.022 251.64deg);
		--grayish-blue: oklch(62.05% 0.037 264.25deg);
		--dark-blue: oklch(31.61% 0.061 260.77deg);
		--shadow-color: oklch(31.61% 0.061 260.77deg / 10%);

		font-family: outfit, sans-serif;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background: var(--light-gray);
		color: var(--dark-blue);
	}
</style>
