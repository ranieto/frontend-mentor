<div class="app">
	<slot />
</div>

<style>
	@font-face {
		font-family: Poppins;
		font-weight: 200;
		src:
			local("Poppins Light"),
			url("/src/lib/assets/fonts/Poppins-Light.woff2") format("woff2");
	}

	@font-face {
		font-family: Poppins;
		font-weight: 400;
		src:
			local("Poppins Regular"),
			url("/src/lib/assets/fonts/Poppins-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: Poppins;
		font-weight: 600;
		src:
			local("Poppins Semi Bold"),
			url("/src/lib/assets/fonts/Poppins-SemiBold.woff2") format("woff2");
	}

	.app {
		/* Primary */
		--red: hsl(0deg 78% 62%);
		--cyan: hsl(180deg 62% 55%);
		--orange: hsl(34deg 97% 64%);
		--blue: hsl(212deg 86% 64%);

		/* Neutral */
		--white: #fff;
		--grayish-blue: hsl(229deg 6% 66%);
		--very-light-gray: hsl(0deg 0% 98%);
		--very-dark-blue: hsl(234deg 12% 34%);
		--shadow: hsl(234deg 12% 34% / 10%);

		font-family: Poppins, sans-serif;
		font-weight: 400;
		min-height: 100dvh;
		padding: 2rem;
		display: grid;
		place-content: center;
		color: var(--very-dark-blue);
		background-color: var(--very-light-gray);
	}
</style>
