<div class="app">
	<slot />
</div>

<style lang="postcss">
	@font-face {
		font-family: Montserrat;
		font-weight: 500;
		src:
			local("Montserrat Medium"),
			url("/src/lib/assets/fonts/Montserrat-Medium.woff2") format("woff2");
	}

	@font-face {
		font-family: Montserrat;
		font-weight: 700;
		src:
			local("Montserrat Bold"),
			url("/src/lib/assets/fonts/Montserrat-Bold.woff2") format("woff2");
	}

	@font-face {
		font-family: Fraunces;
		font-weight: 700;
		src:
			local("Fraunces Bold"),
			url("/src/lib/assets/fonts/Fraunces144pt-Bold.woff2") format("woff2");
	}

	.app {
		/* Primary */
		--dark-cyan: hsl(158deg 36% 37%);
		--darker-cyan: hsl(158deg 36% 23%);
		--cream: hsl(30deg 38% 92%);

		/* Neutral */
		--very-dark-blue: hsl(212deg 21% 14%);
		--dark-grayish-blue: hsl(228deg 12% 48%);
		--white: hsl(0deg 0% 100%);

		font-family: Montserrat, sans-serif;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background: var(--cream);
		color: var(--dark-grayish-blue);
		font-weight: 500;
	}
</style>
