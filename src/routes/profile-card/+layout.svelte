<div class="app">
	<slot />
</div>

<style>
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
			local("Kumbh Sans Bold"),
			url("/src/lib/assets/fonts/kumbh-sans-latin-700-normal.woff2")
				format("woff2");
	}

	.app {
		/* Primary */
		--white: #fff;
		--dark-cyan: hsl(185deg 75% 39%);
		--very-dark-desaturated-blue: hsl(229deg 23% 23%);
		--dark-grayish-blue: hsl(227deg 10% 46%);
		--shadow: hsl(229deg 23% 23% / 40%);

		/* Neutral */
		--dark-gray: hsl(0deg 0% 59%);

		font-family: "Kumbh Sans", sans-serif;
		font-weight: 400;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		color: var(--very-dark-desaturated-blue);
		background:
			no-repeat url("./bg-pattern-top.svg") bottom 50vh right 50vw,
			no-repeat url("./bg-pattern-bottom.svg") top 50vh left 50vw;
		background-color: var(--dark-cyan);
	}
</style>
