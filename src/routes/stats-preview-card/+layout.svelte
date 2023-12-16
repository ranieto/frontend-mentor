<main>
	<slot />
</main>

<style lang="postcss">
	@font-face {
		font-family: Inter;
		font-weight: 400;
		src:
			local("Inter Regular"),
			url("/src/lib/assets/fonts/Inter-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: Inter;
		font-weight: 700;
		src:
			local("Inter Bold"),
			url("/src/lib/assets/fonts/Inter-Bold.woff2") format("woff2");
	}

	@font-face {
		font-family: "Lexend Deca";
		font-weight: 400;
		src:
			local("Lexend Deca Regular"),
			url("/src/lib/assets/fonts/LexendDeca-Regular.woff2") format("woff2");
	}

	main {
		/* Primary */
		--main-bg: hsl(233deg 47% 7%); /* main bg */
		--card-bg: hsl(244deg 38% 16%); /* card bg */
		--accent: hsl(277deg 64% 61%); /* accent */

		/* Neutral */
		--white: hsl(0deg 0% 100%); /* main heading, stats */
		--slightly-transparent-white: hsl(0deg 0% 100% / 75%); /* main paragraph */
		--slightlier-transparent-white: hsl(0deg 0% 100% / 60%); /* stat heading */

		font-family: inter, sans-serif;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background: var(--main-bg);
		color: var(--slightly-transparent-white);
		padding: 1rem;
	}
</style>
