import { intervalToDuration } from "date-fns";

type BirthDate = {
	year: number;
	month: number;
	day: number;
};

const createDateFrom = ({ year, month, day }: BirthDate) => {
	const date = new Date(year, month - 1, day);
	date.setFullYear(year);
	return date;
};

export const calculateAge = (values: BirthDate) =>
	intervalToDuration({
		start: createDateFrom(values),
		end: Date.now(),
	});

export const isDateValid = ({ year, month, day }: BirthDate) => {
	const date = createDateFrom({ year, month, day });
	return (
		date.getDate() === day &&
		date.getMonth() + 1 === month &&
		date.getFullYear() === year
	);
};

export const isDateInPast = (values: BirthDate) => {
	return createDateFrom(values) < new Date();
};
