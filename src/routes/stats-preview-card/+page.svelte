<script lang="ts">
	import image from "./image-header.jpg";
</script>

<article>
	<div class="content">
		<h1>
			Get <span class="accent">insights</span>
			that help your business grow.
		</h1>
		<p>
			Discover the benefits of data analytics and make better decisions
			regarding revenue, customer experience, and overall efficiency
		</p>
		<div class="stats">
			<div class="stat-block">
				<div class="stat-number">10k+</div>
				<div class="stat-name">Companies</div>
			</div>
			<div class="stat-block">
				<div class="stat-number">314</div>
				<div class="stat-name">Templates</div>
			</div>
			<div class="stat-block">
				<div class="stat-number">12M+</div>
				<div class="stat-name">Queries</div>
			</div>
		</div>
	</div>
	<div class="image-container">
		<img src={image} alt="People in an office with notebooks working" />
		<div class="color-overlay"></div>
	</div>
</article>

<style>
	article {
		border-radius: 10px;
		overflow: hidden;
		min-width: 20ch;
		max-width: 110ch;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	h1 {
		color: var(--white);
		font-weight: 700;
		font-size: 2rem;
	}

	.image-container {
		background: var(--accent);
	}

	img {
		mix-blend-mode: multiply;
		opacity: 0.8;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.content {
		background: var(--card-bg);
		padding: 4rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& p {
			flex: 1;
		}
	}

	.accent {
		color: var(--accent);
	}

	.stats {
		display: flex;
		justify-content: space-between;
		text-align: center;
	}

	.stat-name {
		text-transform: uppercase;
		color: var(--slightlier-transparent-white);
		font-family: "Lexend Deca", sans-serif;
		font-size: 0.9rem;
	}

	.stat-number {
		color: var(--white);
		font-weight: 700;
		font-size: 1.8rem;
	}

	@media (width < 120ch) {
		article {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto;
			max-width: 50ch;
		}

		.content {
			grid-row: 2;
			padding: 2.5rem;
			text-align: center;
		}

		img {
			max-height: 30ch;
		}
	}

	@media (width < 50ch) {
		.stats {
			flex-direction: column;
			gap: 2rem;
		}
	}
</style>
