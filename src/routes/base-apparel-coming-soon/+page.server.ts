import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
	subscribe: async ({ request }) => {
		const data = await request.formData();
		const email = data.get("email") as string;

		const regex = new RegExp(
			"^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
		);

		const isValid = regex.test(email);

		if (!isValid) {
			return fail(422, {
				error: "Please provide a valid email",
				email,
			});
		}

		throw redirect(303, "/");
	},
} satisfies Actions;
