<script lang="ts">
	import musicIcon from "./icon-music.svg";
	import hero from "./illustration-hero.svg";
</script>

<div class="card">
	<img class="hero" src={hero} alt="A drawing of a girl listening to music" />
	<div class="card-content">
		<h1>Order Summary</h1>
		<p class="info">
			You can now listen to millions of songs, audiobooks, and podcasts on any
			device anywhere you like!
		</p>
		<div class="subscription">
			<img class="music-icon" src={musicIcon} alt="Music icon" />
			<div class="subscription-info">
				<h2>Annual Plan</h2>
				<p>$59.99/year</p>
			</div>
			<a href="/">Change</a>
		</div>
		<button class="btn-pay">Proceed to Payment</button>
		<button class="btn-cancel">Cancel Order</button>
	</div>
</div>

<style>
	.card {
		--border-radius: 10px;

		background: var(--white);
		max-width: 40ch;
		min-width: 22ch;
		margin: 1rem;
		border-radius: var(--border-radius);
	}

	.hero {
		border-top-right-radius: var(--border-radius);
		border-top-left-radius: var(--border-radius);
	}

	.card-content {
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h1 {
		font-weight: 900;
		font-size: 1.6rem;
		text-align: center;
	}

	h2 {
		font-weight: 900;
		font-size: 1rem;
	}

	p {
		color: var(--desaturated-blue);
	}

	.info {
		text-align: center;
	}

	button {
		border: none;
		font-weight: 700;
		display: block;
		padding: 0.8rem;
		border-radius: 10px;
		font-size: 0.9rem;
		cursor: pointer;
	}

	.subscription {
		background-color: var(--very-pale-blue);
		border-radius: 10px;
		display: flex;
		align-items: center;
		padding: 1.4rem;
		gap: 1rem;
	}

	.subscription-info {
		flex: 1;
	}

	a {
		font-size: 0.8rem;
	}

	a:hover {
		opacity: 0.6;
		text-decoration: none;
	}

	.btn-pay {
		background: var(--bright-blue);
		color: var(--very-pale-blue);
		width: 100%;
		box-shadow: var(--bright-blue-shadow) 0 20px 20px;
	}

	.btn-pay:hover {
		opacity: 0.8;
	}

	.btn-cancel {
		background: transparent;
		margin: 0 auto;
		color: var(--desaturated-blue);
	}

	.btn-cancel:hover {
		color: var(--dark-blue);
	}

	@media (width <= 380px) {
		.music-icon {
			display: none;
		}

		.subscription {
			flex-direction: column;
		}
	}
</style>
