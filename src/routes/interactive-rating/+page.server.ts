import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	rate: async ({ request }) => {
		const data = await request.formData();
		const rating = data.get("rating");

		return rating ? { rating } : fail(422, { error: "Choose a rating" });
	},
};
