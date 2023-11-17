<div class="app">
	<slot />
</div>

<style>
	@font-face {
		font-family: Poppins;
		font-weight: 400;
		src:
			local("Poppins Regular"),
			url("/src/lib/assets/fonts/Poppins-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: Poppins;
		font-weight: 500;
		src:
			local("Poppins Medium"),
			url("/src/lib/assets/fonts/Poppins-Medium.woff2") format("woff2");
	}

	@font-face {
		font-family: Poppins;
		font-weight: 600;
		src:
			local("Poppins Semi Bold"),
			url("/src/lib/assets/fonts/Poppins-SemiBold.woff2") format("woff2");
	}

	@font-face {
		font-family: Poppins;
		font-weight: 700;
		src:
			local("Poppins Bold"),
			url("/src/lib/assets/fonts/Poppins-Bold.woff2") format("woff2");
	}

	.app {
		/* Primary */
		--red: hsl(0deg 100% 74%);
		--green: hsl(154deg 59% 51%);
		--green-shadow: hsl(154deg 59% 51% / 50%);
		--white: hsl(0deg 0% 100%);

		/* Accent */
		--accent: hsl(248deg 32% 49%);

		/* Neutral */
		--dark-blue: hsl(249deg 10% 26%);
		--shadow: hsl(249deg 10% 26% / 20%);
		--grayish-blue: hsl(246deg 25% 77%);

		font-family: Poppins, sans-serif;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background: url("./bg-intro-desktop.png") var(--red);
		color: var(--white);
	}
</style>
