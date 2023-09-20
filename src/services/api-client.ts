import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: {
		key: '85c16b366fc64eacbfe508d68210493d',
	},
});
