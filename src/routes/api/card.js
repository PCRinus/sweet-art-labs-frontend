import { variables } from '$lib/variables';

export const get = async () => {
	const data = await fetch(variables.apiPath + '/cakes?fields=name,price,unit&populate=image');
	const result = await data.json();

	return {
		body: {
			result
		}
	};
};
