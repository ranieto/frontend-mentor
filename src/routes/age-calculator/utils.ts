import { intervalToDuration } from "date-fns";

type BirthDate = {
	year: string;
	month: string;
	day: string;
};

const createDateFrom = ({ year, month, day }: BirthDate) => {
	const date = new Date(Number(year), Number(month) - 1, Number(day));
	date.setFullYear(Number(year));
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
		date.getDate() === Number(day) &&
		date.getMonth() + 1 === Number(month) &&
		date.getFullYear() === Number(year)
	);
};

export const isDateInPast = (values: BirthDate) => {
	return createDateFrom(values) < new Date();
};

export const isDayValid = (day: string) => {
	return Number(day) >= 1 && Number(day) <= 31;
};

export const isMonthValid = (month: string) => {
	return Number(month) >= 1 && Number(month) <= 12;
};

export const isYearInPast = (year: string) => {
	return Number(year) <= new Date().getFullYear();
};
