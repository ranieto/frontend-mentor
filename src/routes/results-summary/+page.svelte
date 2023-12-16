<script lang="ts">
	import IconoirBrain from "~icons/iconoir/brain";
	import IconoirChatRemove from "~icons/iconoir/chat-remove";
	import IconoirEyeEmpty from "~icons/iconoir/eye-empty";
	import IconoirFlash from "~icons/iconoir/flash";

	const results = {
		reaction: 80,
		memory: 92,
		verbal: 61,
		visual: 72,
	};
</script>

<main>
	<div class="result-block">
		<h1 class="result-title">Your Results</h1>
		<div class="score-container">
			<p class="score-obtained">76</p>
			<p class="score-total">of 100</p>
		</div>
		<div class="result-explanation">
			<h2 class="result-name">Great</h2>
			<p class="result-description">
				You scored higher than 65% of the people who have taken these tests.
			</p>
		</div>
	</div>
	<div class="summary-block">
		<h1 class="summary-title">Summary</h1>
		<div class="summary-detail">
			<div class="detail-block reaction">
				<div class="icon"><IconoirFlash /></div>
				<p class="detail-name">Reaction</p>
				<p class="detail-result">
					<span class="detail-result-score">{results.reaction}</span>
					<span class="detail-result-score-total">/ 100</span>
				</p>
			</div>
			<div class="detail-block memory">
				<div class="icon"><IconoirBrain /></div>
				<p class="detail-name">Memory</p>
				<p class="detail-result">
					<span class="detail-result-score">{results.memory}</span>
					<span class="detail-result-score-total">/ 100</span>
				</p>
			</div>
			<div class="detail-block verbal">
				<div class="icon"><IconoirChatRemove /></div>
				<p class="detail-name">Verbal</p>
				<p class="detail-result">
					<span class="detail-result-score">{results.verbal}</span>
					<span class="detail-result-score-total">/ 100</span>
				</p>
			</div>
			<div class="detail-block visual">
				<div class="icon"><IconoirEyeEmpty /></div>
				<p class="detail-name">Visual</p>
				<p class="detail-result">
					<span class="detail-result-score">{results.visual}</span>
					<span class="detail-result-score-total">/ 100</span>
				</p>
			</div>
		</div>
		<a class="proceed-btn" href="/">Continue</a>
	</div>
</main>

<style lang="postcss">
	main {
		background: var(--white);
		border-radius: var(--main-border-radius);
		overflow: hidden;
		max-width: 40ch;
		margin: 0.5rem;
		min-width: 275px;

		@media (width > 80ch) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			max-width: 70ch;
		}
	}

	h1 {
		font-weight: 700;
		font-size: 1.2rem;
	}

	/* RESULTS */

	.result-block {
		padding: 1.5rem;
		background: var(--main-gradient);
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: center;
		border-radius: var(--main-border-radius);
	}

	.result-title {
		color: var(--light-lavender);
	}

	.score-container {
		width: 10rem;
		aspect-ratio: 1 / 1;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 50%;
		background: var(--score-gradient);
		position: relative;
	}

	.score-obtained {
		font-size: 3rem;
		font-weight: 800;
		color: var(--white);
		line-height: 1;
	}

	.score-total {
		color: var(--light-lavender);
		opacity: 0.7;
		font-size: 0.9rem;
	}

	.result-explanation {
		text-align: center;
	}

	.result-name {
		font-size: 1.6rem;
		color: var(--white);
		margin-bottom: 0.7rem;
	}

	.result-description {
		color: var(--light-lavender);
		font-size: 0.9rem;
	}

	/* SUMMARY */

	.summary-block {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 1.5rem;
	}

	.summary-detail {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex: 1;
	}

	.detail-block {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 10px;

		&.reaction {
			background: var(--bg-light-red);
			color: var(--light-red);
		}

		&.memory {
			background: var(--bg-orangey-yellow);
			color: var(--orangey-yellow);
		}

		&.verbal {
			background: var(--bg-green-teal);
			color: var(--green-teal);
		}

		&.visual {
			background: var(--bg-cobalt-blue);
			color: var(--cobalt-blue);
		}
	}

	.detail-name {
		flex: 1;
	}

	.detail-result {
		color: var(--dark-gray-blue);
		font-weight: 700;
	}

	.detail-result-score-total {
		opacity: 0.4;
	}

	.proceed-btn {
		background: var(--dark-gray-blue);
		color: var(--white);
		text-decoration: none;
		padding: 1rem;
		border-radius: 40px;
		display: block;
		text-align: center;

		&:hover {
			background: var(--main-gradient);
		}
	}
</style>
