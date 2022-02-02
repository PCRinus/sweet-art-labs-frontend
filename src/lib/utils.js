import { goto } from '$app/navigation';

export const capitalize = (str) => {
	return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const routeToPage = (route, replaceHistory) => {
	goto(`/${route}`, { replaceHistory });
};
