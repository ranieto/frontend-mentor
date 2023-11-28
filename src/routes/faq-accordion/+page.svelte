<script lang="ts">
	import Arrow from "~icons/material-symbols/keyboard-arrow-down";
	import type { PageData } from "./$types";
	import illustrationBox from "./illustration-box-desktop.svg";
	import illustrationMobile from "./illustration-woman-online-mobile.svg";

	export let data: PageData;
</script>

<article>
	<div class="image-wrapper">
		<div class="desktop-illustration"></div>
		<picture>
			<source srcset={illustrationBox} media="(width > 150ch)" />
			<img src={illustrationMobile} alt="" />
		</picture>
	</div>
	<div class="content">
		<h1>FAQ</h1>
		<div class="items">
			{#each data.faq as { question, answer }}
				<button>
					<h2 class="question">{question}</h2>
					<div class="arrow">
						<Arrow />
					</div>
					<p class="answer">{answer}</p>
				</button>
			{/each}
		</div>
	</div>
</article>

<style>
	article {
		background: #fff;
		padding: 0 2rem 4rem;
		border-radius: 20px;
		width: clamp(30ch, 100vw - 2rem, 50ch);
		margin: clamp(9rem, 50vw - 2rem, 13rem) 1rem 5rem;
		box-shadow: var(--shadow) 0 40px 20px;
	}

	.image-wrapper {
		background: no-repeat center/100% url("./bg-pattern-mobile.svg");
		position: relative;
		height: clamp(100px, 50vw - 2rem, 200px);
		overflow: visible;
	}

	img {
		position: absolute;
		transform: translateY(-60%);
	}

	h1 {
		text-align: center;
		font-weight: 700;
		font-size: 2.5rem;
		margin-block: 1.5rem;
		color: var(--very-dark-desaturated-blue);
	}

	.items {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	button {
		background: transparent;
		border: none;
		text-align: left;
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1rem 1.5rem;
	}

	button::after {
		content: "";
		background: var(--light-grayish-blue);
		height: 1px;
		width: 100%;
		display: block;
		grid-column: 1 / -1;
	}

	.question {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		gap: 2rem;

		&:hover {
			color: var(--soft-red);
		}
	}

	.arrow {
		font-size: 1.2rem;
		color: var(--soft-red);
		transition: rotate 220ms ease-out;
		cursor: pointer;
	}

	.answer {
		display: none;
		font-size: 0.9rem;
		opacity: 0.6;
		text-wrap: pretty;
	}

	button:focus {
		& .question {
			color: var(--very-dark-desaturated-blue);
			font-weight: 700;
		}

		& .answer {
			display: block;
		}

		& .arrow {
			rotate: 180deg;
		}
	}

	@media (width > 150ch) {
		article {
			display: grid;
			grid-template-columns: 1fr 1.1fr;
			width: 110ch;
			padding: 0;
			margin: 1rem 5rem;
		}

		.image-wrapper {
			height: 100%;
			background: no-repeat url("./bg-pattern-desktop.svg");
			background-size: 200%;
			background-position: -580px -300px;
			position: relative;
		}

		.desktop-illustration {
			height: 100%;
			background: no-repeat url("./illustration-woman-online-desktop.svg");
			background-position: -90px 65px;
		}

		img {
			position: absolute;
			top: 310px;
			left: -100px;
			overflow: hidden;
		}

		h1 {
			text-align: left;
		}

		.content {
			padding: 3rem 7rem 6rem 0;
		}
	}
</style>
