/*
	Reroute API calls
*/

module.exports = {
	async rewrites() {
		return [
			{
				source: "/api/:slug*",
				destination: "https://back.chantepie.heroku.app/:slug*",
			},
		];
	},
};
