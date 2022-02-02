import { variables } from '$lib/variables';

export const get = async () => {
	const homepageData = await fetch(
		variables.apiPath + '/homepage?fields=intro&populate=banner_photo'
	);
	const newCakesData = await fetch(
		variables.apiPath + '/cakes?fields=name,price,unit&populate=image'
	);
	const result = [await homepageData.json(), await newCakesData.json()];

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
