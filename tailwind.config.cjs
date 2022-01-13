module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			screens: {
				xs: '540px'
			},
			colors: {
				powderBlue: {
					300: '#D6E9EB',
					500: '#A9D2D5'
				},
				superPink: '#DB5ABA',
				goldCrayola: '#ECBA82',
				darkLava: '#443627',
				aquamarine: '#7AE7C7'
			},
			fontFamily: {
				moonDance: ['Moon Dance', 'cursive'],
				satisfy: ['Satisfy', 'cursive']
			}
		}
	},
	plugins: []
};
