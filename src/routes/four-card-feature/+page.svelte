<script lang="ts">
	import iconCalculator from "./icon-calculator.svg";
	import iconKarma from "./icon-karma.svg";
	import iconSupervisor from "./icon-supervisor.svg";
	import iconTeamBuilder from "./icon-team-builder.svg";
</script>

<main>
	<div class="intro-texts">
		<p class="big light center">Reliable, efficient delivery</p>
		<p class="big bold center">Powered by Technology</p>
		<p class="center description">
			Our Artificial Intelligence powered tools use millions of project data
			points to ensure that your project is successful
		</p>
	</div>
	<div class="cards-container">
		<div class="card team-builder">
			<h2>Team Builder</h2>
			<p>
				Scans our talent network to create the optimal team for your project
			</p>
			<div class="icon"><img src={iconTeamBuilder} alt="" /></div>
		</div>
		<div class="card supervisor">
			<h2>Supervisor</h2>
			<p>Monitors activity to identity project roadblocks</p>
			<div class="icon"><img src={iconSupervisor} alt="" /></div>
		</div>
		<div class="card calculator">
			<h2>Calculator</h2>
			<p>Uses data from past projects to provide better delivery estimates</p>
			<div class="icon"><img src={iconCalculator} alt="" /></div>
		</div>
		<div class="card karma">
			<h2>Karma</h2>
			<p>Regularly evaluates our talent to ensure quality</p>
			<div class="icon"><img src={iconKarma} alt="" /></div>
		</div>
	</div>
</main>

<style>
	.intro-texts {
		max-width: 60ch;
		margin: 0 auto;
	}

	.description {
		margin-top: 1.5rem;
	}

	.light {
		font-weight: 200;
	}

	.bold {
		font-weight: 600;
	}

	.big {
		font-size: 2rem;
	}

	.center {
		text-align: center;
	}

	.cards-container {
		margin-top: 3rem;
		display: grid;
		gap: 1.6rem;
		grid-template-rows: repeat(4, 1fr);
		grid-template-columns: repeat(3, 1fr);

		@media (width < 100ch) {
			display: flex;
			flex-direction: column;
		}
	}

	.card {
		background: var(--white);
		border-top: 4px solid;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 5px;
		box-shadow: var(--shadow) 0 10px 10px;

		& h2 {
			font-weight: 600;
			font-size: 1.3rem;
		}

		& p {
			color: var(--grayish-blue);
			font-size: 0.9rem;
			flex: 1;
		}

		& .icon {
			align-self: end;
		}
	}

	.team-builder {
		border-color: var(--red);
		grid-column: 2;
		grid-row: 1 / span 2;
	}

	.supervisor {
		border-color: var(--cyan);
		grid-column: 1;
		grid-row: 2 / span 2;
	}

	.calculator {
		border-color: var(--blue);
		grid-column: 3;
		grid-row: 2 / span 2;
	}

	.karma {
		border-color: var(--orange);
		grid-column: 2;
		grid-row: 3 / span 2;
	}
</style>
