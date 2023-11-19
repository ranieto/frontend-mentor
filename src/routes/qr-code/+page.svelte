<script lang="ts">
	import qrCode from "./image-qr-code.png";
</script>

<main>
	<a href="/">
		<div class="card">
			<img src={qrCode} alt="A QR Code for Frontend Mentor" />
			<h1>Improve your front-end skills by building projects</h1>
			<p>
				Scan the QR code to visit Frontend Mentor and take your coding skills to
				the next level
			</p>
		</div>
	</a>
</main>

<style>
	a {
		all: unset;
		cursor: pointer;
	}

	.card {
		--border-radius: 20px;

		background: var(--white);
		padding: 1rem 1rem 2rem;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow-color) 0 10px 20px;
		max-width: 300px;
		text-align: center;
		transition:
			scale ease-out 120ms,
			box-shadow ease-out 120ms;
	}

	.card:hover {
		scale: 1.05;
		box-shadow: var(--shadow-color) 0 10px 30px;
	}

	h1 {
		font-weight: 700;
		font-size: 1.3rem;
		line-height: 1.5rem;
		margin: 1.5rem 0 1rem;
	}

	p {
		color: var(--grayish-blue);
		padding: 0 0.5rem;
		font-size: 0.9rem;
	}

	img {
		border-radius: calc(var(--border-radius) / 2);
	}
</style>
