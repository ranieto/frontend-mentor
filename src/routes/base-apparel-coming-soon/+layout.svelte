<div class="app">
	<slot />
</div>

<style>
	@font-face {
		font-family: "Josefin Sans";
		font-weight: 400;
		src:
			local("Josefin Sans Regular"),
			url("/src/lib/assets/fonts/JosefinSans-Regular.woff2") format("woff2");
	}

	@font-face {
		font-family: "Josefin Sans";
		font-weight: 300;
		src:
			local("Josefin Sans Light"),
			url("/src/lib/assets/fonts/JosefinSans-Light.woff2") format("woff2");
	}

	@font-face {
		font-family: "Josefin Sans";
		font-weight: 600;
		src:
			local("Josefin Sans Semi Bold"),
			url("/src/lib/assets/fonts/JosefinSans-SemiBold.woff2") format("woff2");
	}

	.app {
		/* primary */
		--desaturated-red: hsl(0deg 36% 70%);
		--desaturated-red-lighter: hsl(0deg 36% 80%);
		--error: hsl(0deg 93% 68%);

		/* neutral */
		--dark-grayish-red: hsl(0deg 6% 24%);

		/* gradients */
		--gradient-bg: linear-gradient(
			135deg,
			hsl(0deg 0% 100%),
			hsl(0deg 100% 98%)
		);
		--gradient-btn: linear-gradient(
			135deg,
			hsl(0deg 80% 86%),
			hsl(0deg 74% 74%)
		);

		font-family: "Josefin Sans", sans-serif;
		min-height: 100dvh;
		color: var(--desaturated-red);
	}
</style>
