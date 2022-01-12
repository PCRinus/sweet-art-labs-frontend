import { variables } from '$lib/variables';

export const get = async () => {
	const data = await fetch(variables.apiPath + 'cakes');
	const result = await data.json();
	console.log(result);

	return {
		body: {
			result
		}
	};
};
