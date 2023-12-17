import { fail, type Actions } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { z } from "zod";
import type { PageServerLoad } from "./$types";
import { calculateAge, isDateInPast, isDateValid } from "./utils";

const requiredErrorText = "This field is required";

const schema = z
	.object({
		day: z
			.number({ required_error: requiredErrorText })
			.positive("Must be a valid day")
			.lte(31, "Must be a valid day")
			.default(undefined as unknown as number),
		month: z
			.number({ required_error: requiredErrorText })
			.positive("Must be a valid month")
			.lte(12, "Must be a valid month")
			.default(undefined as unknown as number),
		year: z
			.number({ required_error: requiredErrorText })
			.lte(new Date().getFullYear(), "Must be in the past")
			.default(undefined as unknown as number),
	})
	.refine((data) => isDateValid(data), "Must be a valid date")
	.refine((data) => isDateInPast(data), "Must be in the past");

export const load = (async () => {
	const form = await superValidate(schema);
	return { form };
}) satisfies PageServerLoad;

export const actions = {
	calculate: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const { years, months, days } = calculateAge(form.data);

		return { years, months, days, form };
	},
} satisfies Actions;
