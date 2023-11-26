<main>
	<slot />
</main>

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
		font-weight: 700;
		src:
			local("Poppins Bold"),
			url("/src/lib/assets/fonts/Poppins-Bold.woff2") format("woff2");
	}

	@font-face {
		font-family: Poppins;
		font-weight: 800;
		src:
			local("Poppins Extra Bold"),
			url("/src/lib/assets/fonts/Poppins-ExtraBold.woff2") format("woff2");
	}

	main {
		/* Primary */
		--accent: hsl(259deg 100% 65%);
		--light-red: hsl(0deg 100% 67%);

		/* Neutral */
		--white: hsl(0deg 0% 100%);
		--off-white: hsl(0deg 0% 94%);
		--light-grey: hsl(0deg 0% 86%);
		--smokey-grey: hsl(0deg 1% 44%);
		--off-black: hsl(0deg 0% 8%);

		font-family: Poppins, sans-serif;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background: var(--off-white);
		color: var(--off-black);
	}
</style>
