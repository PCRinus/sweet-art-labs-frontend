import { variables } from '$lib/variables';

export const get = async () => {
	let [homepageData, newCakesData] = await Promise.all([
		fetch(variables.apiPath + '/homepage?fields=intro&populate=banner_photo').then((response) =>
			response.json()
		),
		fetch(variables.apiPath + '/cakes?fields=name,price,unit&populate=image').then((response) =>
			response.json()
		)
	]);

	return {
		body: [homepageData, newCakesData]
	};
};
