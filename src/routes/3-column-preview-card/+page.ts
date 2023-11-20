import type { PageLoad } from "./$types";
import iconLuxury from "./icon-luxury.svg";
import iconSedans from "./icon-sedans.svg";
import iconSuvs from "./icon-suvs.svg";

export const load = (() => {
	const items = [
		{
			title: "sedans",
			description:
				"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
			icon: iconSedans,
			color: "var(--bright-orange)",
		},
		{
			title: "suvs",
			description:
				"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
			icon: iconSuvs,
			color: "var(--dark-cyan)",
		},
		{
			title: "luxury",
			description:
				"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
			icon: iconLuxury,
			color: "var(--very-dark-cyan)",
		},
	];

	return {
		items,
	};
}) satisfies PageLoad;
