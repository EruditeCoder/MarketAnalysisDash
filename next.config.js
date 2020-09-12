require('dotenv').config();

module.exports = {
	env: {
		MONGODB_URI: process.env.MONGODB_URI,

		BLS_API_KEY: process.env.BLS_API_KEY,
		DOL_API_KEY: process.env.DOL_API_KEY,
		DOL_SHARED_SECRET: process.env.DOL_SHARED_SECRET,
	},
};
