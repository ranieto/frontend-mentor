import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		const firstName = data.get("first-name") as string;
		const lastName = data.get("last-name") as string;
		const email = data.get("email") as string;
		const password = data.get("password") as string;

		const regex = new RegExp(
			"^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
		);

		const isValidEmail = regex.test(email);

		if (!firstName || !lastName || !email || !password || !isValidEmail) {
			return fail(422, {
				firstNameError: firstName ? undefined : "First Name cannot be empty",
				lastNameError: lastName ? undefined : "Last Name cannot be empty",
				emailError: email
					? isValidEmail
						? undefined
						: "Looks like this is not an email"
					: "Email cannot be emptty",
				passwordError: password ? undefined : "Password cannot be empty",
				firstName,
				lastName,
				email,
			});
		}

		return { success: "Thank you!" };
	},
};
