<div class="app">
	<slot />
</div>

<style lang="postcss">
	@font-face {
		font-family: "League Spartan";
		font-weight: 400;
		src:
			local("League Spartan Regular"),
			url("/src/lib/assets/fonts/LeagueSpartan-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: "League Spartan";
		font-weight: 500;
		src:
			local("League Spartan Medium"),
			url("/src/lib/assets/fonts/LeagueSpartan-Medium.woff2") format("woff2");
	}

	@font-face {
		font-family: "League Spartan";
		font-weight: 700;
		src:
			local("League Spartan Bold"),
			url("/src/lib/assets/fonts/LeagueSpartan-Bold.woff2") format("woff2");
	}

	.app {
		/* Primary */
		--very-dark-magenta: hsl(300deg 43% 22%);
		--soft-pink: hsl(333deg 80% 67%);

		/* Neutral */
		--dark-grayish-magenta: hsl(303deg 10% 53%);
		--light-grayish-magenta: hsl(300deg 24% 96%);
		--white: hsl(0deg 0% 100%);

		font-family: "League Spartan", sans-serif;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background:
			no-repeat url("./bg-pattern-top-desktop.svg") top 0 left 0,
			no-repeat url("./bg-pattern-bottom-desktop.svg") bottom 0 right 0;
		background-color: var(--white);
		color: var(--very-dark-magenta);
	}
</style>
