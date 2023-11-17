<div class="app">
	<slot />
</div>

<style>
	@font-face {
		font-family: Overpass;
		font-weight: 400;
		src:
			local("Overpass Regular"),
			url("/src/lib/assets/fonts/Overpass-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: Overpass;
		font-weight: 700;
		src:
			local("Overpass Bold"),
			url("/src/lib/assets/fonts/Overpass-Bold.woff2") format("woff2");
	}

	.app {
		/* Primary */
		--accent: hsl(25deg 97% 53%);

		/* Neutral */
		--white: hsl(0deg 0% 100%);
		--light-grey: hsl(217deg 12% 63%);
		--medium-grey: hsl(216deg 12% 54%);
		--medium-grey-transparent: hsl(216deg 12% 54% / 15%);
		--dark-blue: hsl(213deg 19% 18%);
		--very-dark-blue: hsl(216deg 12% 8%);

		font-family: Overpass, sans-serif;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background: var(--very-dark-blue);
		color: var(--light-grey);
	}
</style>
