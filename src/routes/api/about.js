import { variables } from '$lib/variables';

export const get = async () => {
	const data = await fetch(variables.apiPath + '/about-us?fields=heading,description');
	const result = await data.json();

	if (result) {
		return {
			body: {
				result
			}
		};
	}

	return {
		status: 404
	};
};
