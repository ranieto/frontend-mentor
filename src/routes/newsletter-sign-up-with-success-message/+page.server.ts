import { fail } from "@sveltejs/kit";

import { superValidate } from "sveltekit-superforms/server";
import { z } from "zod";
import type { Actions, PageServerLoad } from "./$types";

const schema = z.object({
	email: z.string().min(1, "Email required").email("Valid email required"),
});

export const load = (async () => {
	const form = await superValidate(schema);
	return { form };
}) satisfies PageServerLoad;

export const actions = {
	subscribe: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	},
} satisfies Actions;
