import { variables } from '$lib/variables';

export const get = async () => {
	const data = await fetch(
		variables.apiPath + '/cakes?fields=name,price,unit&populate=image,allergens,categories'
	);
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
