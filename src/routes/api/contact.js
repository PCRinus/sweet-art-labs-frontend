import { variables } from '$lib/variables';

export const get = async () => {
	const url = variables.apiPath + '/address';
	const data = await fetch(url);
	const result = await data.json();

	return {
		body: {
			result
		}
	};
};
