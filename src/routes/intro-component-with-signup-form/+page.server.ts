import { fail, redirect, type Actions } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { z } from "zod";
import type { PageServerLoad } from "./$types";

const schema = z.object({
	firstName: z.string().min(1, "First name cannot be empty"),
	lastName: z.string().min(1, "Last name cannot be empty"),
	email: z
		.string()
		.min(1, "Email cannot be empty")
		.email("Looks like this is not an email"),
	password: z.string().min(1, "Password cannot be empty"),
});

export const load = (async () => {
	const form = await superValidate(schema);
	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	register: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		redirect(303, "/");
	},
};
