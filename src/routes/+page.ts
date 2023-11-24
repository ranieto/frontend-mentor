/* eslint-disable sonarjs/no-duplicate-string */
import type { Challenge } from "$lib/types/types";
import type { PageLoad } from "./$types";

export const load = (() => {
	const routes: Challenge[] = [
		{
			href: "advice-generator-app-v2",
			name: "Advice Generator App",
			difficulty: "Junior",
			url: "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db",
			dateCompleted: "2023-11-23",
		},
		{
			href: "newsletter-sign-up-with-success-message",
			name: "Newsletter sign-up form with success message",
			difficulty: "Junior",
			url: "https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv",
			dateCompleted: "2023-11-18",
		},
		{
			href: "intro-component-with-signup-form",
			name: "Intro Component with Sign-up Form",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1",
			dateCompleted: "2023-11-16",
		},
		{
			href: "interactive-rating",
			name: "Interactive Rating",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI",
			dateCompleted: "2023-11-16",
		},
		{
			href: "/ping-single-column-coming-soon",
			name: "Ping Single Column Coming Soon",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da",
			dateCompleted: "2023-11-14",
		},
		{
			href: "/social-proof",
			name: "Social Proof",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA",
			dateCompleted: "2023-11-12",
		},
		{
			href: "/stats-preview-card",
			name: "Stats Preview Card",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62",
			dateCompleted: "2023-11-11",
		},
		{
			href: "/product-preview-card",
			name: "Product Preview Card",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa",
			dateCompleted: "2023-11-10",
		},
		{
			href: "/results-summary",
			name: "Results Summary",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV",
			dateCompleted: "2023-11-09",
		},
		{
			href: "/four-card-feature",
			name: "Four Card Feature",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK",
			dateCompleted: "2023-11-08",
		},
		{
			href: "/huddle-landing-page",
			name: "Huddle Landing Page",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0",
			dateCompleted: "2023-11-08",
		},
		{
			href: "/single-price-grid",
			name: "Single Price Grid",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc",
			dateCompleted: "2023-11-08",
		},
		{
			href: "/3-column-preview-card",
			name: "3 Column Preview Card",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-",
			dateCompleted: "2023-11-08",
		},
		{
			href: "/profile-card",
			name: "Profile Card",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ",
			dateCompleted: "2023-11-08",
		},
		{
			href: "nft-preview-card",
			name: "NFT Preview Card",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U",
			dateCompleted: "2023-11-06",
		},
		{
			href: "/order-summary",
			name: "Order Summary",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj",
			dateCompleted: "2023-11-05",
		},
		{
			href: "/qr-code",
			name: "QR Code",
			difficulty: "Newbie",
			url: "https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H",
			dateCompleted: "2023-11-05",
		},
	];

	return {
		routes,
	};
}) satisfies PageLoad;
