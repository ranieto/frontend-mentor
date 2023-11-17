<div class="app">
	<slot />
</div>

<style>
	@font-face {
		font-family: "Josefin Sans";
		font-weight: 300;
		src:
			local("Josefin Sans Thin"),
			url("/src/lib/assets/fonts/JosefinSans-Thin.woff2") format("woff2");
	}

	@font-face {
		font-family: "Josefin Sans";
		font-weight: 400;
		src:
			local("Josefin Sans Regular"),
			url("/src/lib/assets/fonts/JosefinSans-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: "Josefin Sans";
		font-weight: 600;
		src:
			local("Josefin Sans Semi Bold"),
			url("/src/lib/assets/fonts/JosefinSans-SemiBold.woff2") format("woff2");
	}

	.app {
		/* Primary */
		--desaturated-red: hsl(0deg 36% 70%);
		--desaturated-red-transparent: hsl(0deg 36% 70% / 50%);
		--soft-red: hsl(0deg 93% 68%);
		--white: #fff;

		/* Neutral */
		--dark-grayish-red: hsl(0deg 6% 24%);

		/* Gradients */
		--button-gradient: linear-gradient(
			135deg,
			hsl(0deg 80% 86%),
			hsl(0deg 74% 74%)
		);
		--button-gradient-hover: linear-gradient(
			135deg,
			hsl(0deg 0% 100%),
			hsl(0deg 100% 98%)
		);

		font-family: "Josefin Sans", sans-serif;
		min-height: 100dvh;
		display: grid;
		justify-items: center;
		background: var(--white);
		color: var(--desaturated-red);
	}
</style>
