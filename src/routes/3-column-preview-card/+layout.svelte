<div class="app">
	<slot />
</div>

<style>
	@font-face {
		font-family: "Lexend Deca";
		font-weight: 400;
		src:
			local("Lexend Deca Regular"),
			url("/src/lib/assets/fonts/LexendDeca-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: "Big Shoulders Display";
		font-weight: 700;
		src:
			local("Big Shoulders Display Bold"),
			url("/src/lib/assets/fonts/BigShouldersDisplay-Bold.woff2")
				format("woff2");
	}

	.app {
		/* Primary */
		--bright-orange: hsl(31deg 77% 52%);
		--dark-cyan: hsl(184deg 100% 22%);
		--very-dark-cyan: hsl(179deg 100% 13%);

		/* Neutral */
		--transparent-white: hsl(0deg 0% 100% / 75%); /* paragraphs */
		--very-light-gray: hsl(0deg 0% 95%); /* background, headings, buttons */

		font-family: "Lexend Deca", sans-serif;
		font-weight: 400;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background: var(--very-light-gray);
		color: var(--transparent-white);
	}
</style>
