<main>
	<slot />
</main>

<style lang="postcss">
	@font-face {
		font-family: "Kumbh Sans";
		font-weight: 400;
		src:
			local("Kumbh Sans Regular"),
			url("/src/lib/assets/fonts/kumbh-sans-latin-400-normal.woff2")
				format("woff2");
	}

	@font-face {
		font-family: "Kumbh Sans";
		font-weight: 700;
		src:
			local("Kumbh Sans Regular"),
			url("/src/lib/assets/fonts/kumbh-sans-latin-700-normal.woff2")
				format("woff2");
	}

	main {
		/* Primary text */
		--very-dark-desaturated-blue: hsl(238deg 29% 16%);
		--soft-red: hsl(14deg 88% 65%);

		/* Neutral text */
		--very-dark-grayish-blue: hsl(237deg 12% 33%);
		--dark-grayish-blue: hsl(240deg 6% 50%);

		/* Background gradient */
		--soft-violet: hsl(273deg 75% 66%);
		--soft-blue: hsl(240deg 73% 65%);

		/* Dividers */
		--light-grayish-blue: hsl(240deg 5% 91%);

		/* Shadow */
		--shadow: hsl(237deg 12% 33% / 60%);

		font-family: "Kumbh Sans", sans-serif;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background: linear-gradient(
			to bottom,
			var(--soft-violet),
			var(--soft-blue)
		);
		color: var(--dark-grayish-blue);
	}
</style>
