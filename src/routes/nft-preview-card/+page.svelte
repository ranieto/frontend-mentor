<script lang="ts">
	import MdiClockTimeThree from "~icons/mdi/clock-time-three";
	import MdiEthereum from "~icons/mdi/ethereum";
	import MdiEye from "~icons/mdi/eye";
	import avatar from "./image-avatar.png";
	import nft from "./image-equilibrium.jpg";
</script>

<main>
	<a href="/">
		<div class="nft-container">
			<img class="nft" src={nft} alt="A unique NFT" />
			<div class="eye-icon">
				<MdiEye />
			</div>
		</div>
	</a>
	<a class="title-link" href="/">
		<h1>Equilibrium #3429</h1>
	</a>
	<p class="description">
		Our Equilibrium collection promotes balance and calm.
	</p>
	<div class="item-info">
		<p class="price"><MdiEthereum />0.041 ETH</p>
		<p class="time"><MdiClockTimeThree />3 days left</p>
	</div>
	<hr />
	<div class="author">
		<img class="author-avatar" src={avatar} alt="Avatar of NFT author" />
		<p class="author-info">
			Creation of <a href="/">Jules Wyvern</a>
		</p>
	</div>
</main>

<style lang="postcss">
	main {
		background: var(--very-dark-blue-card-bg);
		padding: 1.5rem 1.5rem 2rem;
		border-radius: 15px;
		max-width: 30ch;
		min-width: 15ch;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 1rem;
	}

	a {
		color: var(--white);

		&:hover {
			text-decoration: none;
			color: var(--cyan);
		}
	}

	h1 {
		font-size: 1.2rem;
		font-weight: 600;
		cursor: pointer;
		color: var(--white);

		&:hover {
			color: var(--cyan);
		}
	}

	.title-link {
		text-decoration: none;
	}

	p {
		color: var(--soft-blue);
		font-weight: 300;
	}

	hr {
		outline: none;
		border: none;
		border-top: 1px solid var(--very-dark-blue-line);
	}

	.nft-container {
		--nft-border-radius: 10px;

		border-radius: calc(var(--nft-border-radius) + 1px);
		position: relative;
	}

	.nft {
		border-radius: var(--nft-border-radius);
	}

	.eye-icon {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.5rem;
		color: var(--white);
		background-color: var(--cyan-overlay);
		border-radius: var(--nft-border-radius);
		opacity: 0;
		transition: opacity ease-out 150ms;

		&:hover {
			opacity: 1;
		}
	}

	.item-info {
		display: flex;
		justify-content: space-between;

		p {
			display: flex;
			align-items: center;
			gap: 0.3rem;
		}
	}

	.price {
		color: var(--cyan);
		font-weight: 600;
	}

	.author {
		display: flex;
		gap: 1rem;
		align-items: center;
		position: relative;
	}

	.author-avatar {
		height: 2rem;
		border-radius: 50%;
		display: inline;
		border: 1px solid var(--white);
	}

	@media (width < 280px) {
		main {
			padding: 1rem;
		}

		.item-info {
			flex-direction: column;
		}
	}
</style>
