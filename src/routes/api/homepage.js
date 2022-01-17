import { variables } from '$lib/variables';

export const get = async () => {
	const data = await fetch(variables.apiPath + '/homepage?fields=intro&populate=banner_photo');
	const result = await data.json();

	return {
		body: {
			result
		}
	};
};
