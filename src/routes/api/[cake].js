import { variables } from '$lib/variables';

export const get = async ({ params }) => {
	const { cake } = params;

	const url = `${variables.apiPath}/cakes/${cake}?fields=name,price,unit&populate=image,allergens,categories,cake_info`;

	const data = await fetch(url);
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
