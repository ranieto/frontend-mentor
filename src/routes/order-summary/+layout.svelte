<div class="app">
	<slot />
</div>

<style lang="postcss">
	@font-face {
		font-family: "Red Hat Display";
		font-weight: 500;
		src:
			local("Red Hat Display Medium"),
			url("/src/lib/assets/fonts/RedHatDisplay-Medium.woff2") format("woff2");
	}

	@font-face {
		font-family: "Red Hat Display";
		font-weight: 700;
		src:
			local("Red Hat Display Bold"),
			url("/src/lib/assets/fonts/RedHatDisplay-Bold.woff2") format("woff2");
	}

	@font-face {
		font-family: "Red Hat Display";
		font-weight: 900;
		src:
			local("Red Hat Display Black"),
			url("/src/lib/assets/fonts/RedHatDisplay-Black.woff2") format("woff2");
	}

	.app {
		/* Primary */
		--pale-blue: hsl(225deg 100% 94%);
		--bright-blue: hsl(245deg 75% 52%);
		--bright-blue-shadow: hsl(245deg 75% 52% / 20%);

		/* Neutral */
		--very-pale-blue: hsl(225deg 100% 98%);
		--desaturated-blue: hsl(224deg 23% 55%);
		--dark-blue: hsl(223deg 47% 23%);
		--white: hsl(0deg 0% 100%);

		font-family: "Red Hat Display", sans-serif;
		font-weight: 500;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background-image: url("./pattern-background-desktop.svg");
		background-repeat: no-repeat;
		background-color: var(--pale-blue);
		color: var(--dark-blue);
	}
</style>
