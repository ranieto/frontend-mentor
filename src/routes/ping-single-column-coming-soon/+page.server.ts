import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	subscribe: async ({ request }) => {
		const data = await request.formData();
		const email = data.get("email") as string;

		const regex = new RegExp(
			"^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
		);

		const isValid = regex.test(email);

		return isValid
			? {
					success: "Thank you!",
			  }
			: fail(422, {
					error: "Invalid email. Try again.",
			  });
	},
};
