import { fail, type Actions } from "@sveltejs/kit";
import {
	calculateAge,
	isDateInPast,
	isDateValid,
	isDayValid,
	isMonthValid,
	isYearInPast,
} from "./utils";

const requiredErrorText = "This field is required";

const getDayError = (day: string) =>
	day
		? isDayValid(day)
			? undefined
			: "Must be a valid day"
		: requiredErrorText;

const getMonthError = (month: string) =>
	month
		? isMonthValid(month)
			? undefined
			: "Must be a valid month"
		: requiredErrorText;

const getYearError = (year: string) =>
	year
		? isYearInPast(year)
			? undefined
			: "Must be in the past"
		: requiredErrorText;

export const actions = {
	calculate: async ({ request }) => {
		const data = await request.formData();
		const year = data.get("year") as string;
		const month = data.get("month") as string;
		const day = data.get("day") as string;

		if (
			!year ||
			!month ||
			!day ||
			!isDayValid(day) ||
			!isMonthValid(month) ||
			!isYearInPast(year)
		) {
			return fail(422, {
				dayError: getDayError(day),
				monthError: getMonthError(month),
				yearError: getYearError(year),
				day,
				month,
				year,
			});
		}

		if (!isDateValid({ year, month, day })) {
			return fail(422, {
				dateError: "Must be a valid date",
				day,
				month,
				year,
			});
		}

		if (!isDateInPast({ year, month, day })) {
			return fail(422, {
				dateError: "Must be in the past",
				day,
				month,
				year,
			});
		}

		const { years, months, days } = calculateAge({ year, month, day });

		return { years, months, days, year, month, day };
	},
} satisfies Actions;
