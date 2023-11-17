<script lang="ts">
	import Star from "~icons/twemoji/star";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<main>
	<div class="info">
		<h1>10,000+ of our users love our products.</h1>
		<p class="main-text">
			We only provide great products combined with excellent customer service.
			See what our satisfied customers are saying about our services.
		</p>
	</div>
	<div class="ratings">
		{#each data.raters as rater (rater)}
			<div class="rating-wrapper">
				<div class="rating-box">
					<div class="stars">
						<Star />
						<Star />
						<Star />
						<Star />
						<Star />
					</div>
					<p class="rating-text">Rated 5 Stars in {rater}</p>
				</div>
			</div>
		{/each}
	</div>
	<div class="testimonials">
		{#each data.testimonials as { name, testimonial, picture: src } (name)}
			<div class="testimonial-card">
				<img {src} class="client-photo" alt="Headshot of {name}" />
				<div class="client-info">
					<h2>{name}</h2>
					<p class="description">Verified Buyer</p>
				</div>
				<q class="testimonial">{testimonial}</q>
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		--border-radius: 10px;

		display: grid;
		gap: 3rem;
		margin: 1rem;
		max-width: 120ch;
		min-width: 260px;
	}

	h1 {
		font-size: 3.5rem;
		font-weight: 700;
		color: var(--very-dark-magenta);
		line-height: 3rem;
		letter-spacing: -0.05ch;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: center;
	}

	.main-text {
		color: var(--dark-grayish-magenta);
		font-weight: 500;
	}

	.ratings {
		display: grid;
		gap: 2rem;
	}

	.rating-wrapper {
		container: rating / inline-size;
	}

	.rating-box {
		width: 100%;
		display: flex;
		background: var(--light-grayish-magenta);
		border-radius: var(--border-radius);
		font-weight: 700;
		padding: 1rem;
		gap: 1.5rem;
		justify-content: center;
	}

	.stars {
		display: flex;
		gap: 0.2rem;
	}

	.testimonials {
		display: grid;
		gap: 1rem;
	}

	.testimonial-card {
		background: var(--very-dark-magenta);
		color: var(--white);
		padding: 2rem;
		border-radius: var(--border-radius);
		display: grid;
		grid-template: 3rem 1fr / 3rem 1fr;
		gap: 1.5rem 1.2rem;
	}

	h2 {
		font-weight: 700;
	}

	.description {
		color: var(--soft-pink);
	}

	.client-photo {
		border-radius: 50%;
	}

	.testimonial {
		grid-row: 2;
		grid-column: 1 / -1;
	}

	@container rating (width < 40ch) {
		.rating-box {
			flex-direction: column;
			gap: 0.5rem;
			text-align: center;
			align-items: center;
		}
	}

	@media (width > 102ch) {
		main {
			grid-template-columns: repeat(2, auto);
			grid-template-rows: repeat(2, auto);
			gap: 5rem;
		}

		.info {
			text-align: left;
		}

		.ratings {
			grid-template-columns: repeat(2, 4ch) 1fr repeat(2, 4ch);
			grid-template-rows: repeat(3, auto);
			row-gap: 1rem;
		}

		.rating-wrapper:nth-child(1) {
			grid-column: 1 / span 3;
			grid-row: 1;
		}

		.rating-wrapper:nth-child(2) {
			grid-column: 2 / span 3;
			grid-row: 2;
		}

		.rating-wrapper:nth-child(3) {
			grid-column: 3 / span 3;
			grid-row: 3;
		}

		.rating-box {
			justify-content: unset;
		}

		.testimonials {
			grid-column: 1 / -1;
			grid-template-rows: repeat(2, 1ch) 1fr repeat(2, 1ch);
			grid-template-columns: repeat(3, 1fr);
			column-gap: 1.5rem;
		}

		.testimonial-card:nth-child(1) {
			grid-row: 1 / span 3;
			grid-column: 1;
		}

		.testimonial-card:nth-child(2) {
			grid-row: 2 / span 3;
			grid-column: 2;
		}

		.testimonial-card:nth-child(3) {
			grid-row: 3 / span 3;
			grid-column: 3;
		}
	}
</style>
