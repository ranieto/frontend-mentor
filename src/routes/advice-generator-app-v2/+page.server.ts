import type { Actions, PageServerLoad } from "./$types";
import { getRandomAdvice } from "./get-random-advice";

export const load = (async () => getRandomAdvice()) satisfies PageServerLoad;

export const actions = {
	default: async () => getRandomAdvice(),
} satisfies Actions;
