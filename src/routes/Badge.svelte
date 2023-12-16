<script lang="ts">
	import type { Difficulty } from "$lib/types/types";

	export let difficulty: Difficulty;

	const colorFor: Record<Difficulty, string> = {
		Newbie: "hsla(192, 43%, 65%, 1)",
		Junior: "hsla(77, 60%, 60%, 1)",
		Intermediate: "hsla(43, 79%, 58%, 1)",
		Advanced: "hsla(29, 76%, 57%, 1)",
		Guru: "hsla(355, 67%, 55%, 1)",
	};

	const numberFor: Record<Difficulty, number> = {
		Newbie: 1,
		Junior: 2,
		Intermediate: 3,
		Advanced: 4,
		Guru: 5,
	};
</script>

<div class="container" style:border-color={colorFor[difficulty]}>
	<div style:background-color={colorFor[difficulty]} class="number">
		{numberFor[difficulty]}
	</div>
	<p style:color={colorFor[difficulty]}>{difficulty}</p>
</div>

<style lang="postcss">
	.container {
		display: flex;
		border-width: 2px;
		border-style: solid;
		border-radius: 5px;
		align-items: center;
	}

	.number {
		padding: 0 0.5rem;
		color: #fff;
		margin: 0;
	}

	p {
		flex: 1;
		padding: 0 1rem;
		text-transform: uppercase;
		font-weight: 600;
		font-size: 0.9rem;
	}
</style>
