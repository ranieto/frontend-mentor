<script lang="ts">
	import CheckCircle from "~icons/mdi/check-circle";

	export let email: string;
</script>

<main>
	<span class="icon"><CheckCircle /></span>
	<h1>Thanks for subscribing!</h1>
	<p>
		A confirmation email has been sent to
		<strong>{email}.</strong>
		Please open it and click the button inside to confirm your subscription.
	</p>
	<a href="/">Dismiss message</a>
</main>

<style>
	main {
		background: var(--white);
		height: 100dvh;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 2rem;
	}

	strong {
		font-weight: 700;
	}

	a {
		background: var(--dark-slate-grey);
		border: 0;
		color: var(--white);
		padding: 1rem;
		border-radius: 7px;
		width: 100%;
		font-size: 0.9rem;
		text-decoration: none;
		text-align: center;

		&:hover {
			background: var(--button-gradient);
			box-shadow: var(--tomato-shadow) 0 10px 10px;
		}
	}

	h1 {
		line-height: 3rem;
		font-size: 3rem;
		font-weight: 700;
	}

	.icon {
		flex-shrink: 0;
		color: var(--tomato);
		font-size: 3rem;
	}

	@media (width > 375px) {
		main {
			height: unset;
			padding: 3rem 4rem 4rem;
			max-width: 30rem;
			border-radius: 20px;
			margin: 1rem;
		}
	}
</style>
