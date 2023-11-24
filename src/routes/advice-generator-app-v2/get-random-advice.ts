type AdviceResponse = {
	slip: { id: number; advice: string };
};

export const getRandomAdvice = async () => {
	const response = await fetch("https://api.adviceslip.com/advice");
	const {
		slip: { id, advice },
	} = (await response.json()) as AdviceResponse;
	return { id, advice };
};
