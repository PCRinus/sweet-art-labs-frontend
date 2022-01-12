import { variables } from '$lib/variables';

export const get = async () => {
	const data = await fetch(variables.apiPath + 'about-us?fields=heading,description');
	const res = await data.json();

	return {
		body: {
			res
		}
	};
};
