import { variables } from '$lib/variables';

export const get = async () => {
	const homepageData = await fetch(
		variables.apiPath + '/homepage?fields=intro&populate=banner_photo'
	);
	const newCakesData = await fetch(
		variables.apiPath + '/cakes?fields=name,price,unit&populate=image'
	);

	// const data = await Promise.all([
	// 	fetch(variables.apiPath + '/homepage?fields=intro&populate=banner_photo'),
	// 	fetch(variables.apiPath + '/cakes?fields=name,price,unit&populate=image')
	// ]);

	const result = [await homepageData.json(), await newCakesData.json()];

	return {
		body: {
			result
		}
	};
};
