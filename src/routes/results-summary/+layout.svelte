<div class="app">
	<slot />
</div>

<style>
	@font-face {
		font-family: "Hanken Grotesk";
		font-weight: 500;
		src:
			local("Hanken Grotesk Medium"),
			url("/src/lib/assets/fonts/hanken-grotesk-latin-500-normal.woff2")
				format("woff2");
	}

	@font-face {
		font-family: "Hanken Grotesk";
		font-weight: 700;
		src:
			local("Hanken Grotesk Bold"),
			url("/src/lib/assets/fonts/hanken-grotesk-latin-700-normal.woff2")
				format("woff2");
	}

	@font-face {
		font-family: "Hanken Grotesk";
		font-weight: 800;
		src:
			local("Hanken Grotesk Extra Bold"),
			url("/src/lib/assets/fonts/hanken-grotesk-latin-800-normal.woff2")
				format("woff2");
	}

	.app {
		--main-border-radius: 20px;

		/* Primary */
		--block-transparency: 10%;
		--light-red: hsl(0deg 100% 67%);
		--orangey-yellow: hsl(39deg 100% 56%);
		--green-teal: hsl(166deg 100% 37%);
		--cobalt-blue: hsl(234deg 85% 45%);
		--bg-light-red: hsl(0deg 100% 67% / var(--block-transparency));
		--bg-orangey-yellow: hsl(39deg 100% 56% / var(--block-transparency));
		--bg-green-teal: hsl(166deg 100% 37% / var(--block-transparency));
		--bg-cobalt-blue: hsl(234deg 85% 45% / var(--block-transparency));

		/* Gradients */
		--light-slate-blue: hsl(252deg 100% 67%); /* background */
		--light-royal-blue: hsl(241deg 81% 54%); /* background */
		--violet-blue: hsl(256deg 72% 46% / 100%); /* circle */
		--persian-blue: hsl(241deg 72% 46% / 0%); /* circle */
		--main-gradient: linear-gradient(
			to bottom,
			var(--light-slate-blue),
			var(--light-royal-blue)
		);
		--score-gradient: linear-gradient(
			to bottom,
			var(--violet-blue),
			var(--persian-blue)
		);

		/* Neutral */
		--white: hsl(0deg 0% 100%);
		--pale-blue: hsl(221deg 100% 96%);
		--light-lavender: hsl(241deg 100% 89%);
		--dark-gray-blue: hsl(224deg 30% 27%);

		font-family: "Hanken Grotesk", sans-serif;
		min-height: 100dvh;
		display: grid;
		place-items: center;
		background: var(--pale-blue);
		color: var(--dark-gray-blue);
	}
</style>
