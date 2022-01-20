/*
	Reroute API calls
*/

module.exports = {
	async rewrites() {
		return [
			{
				source: "/api/:slug*",
				destination: "https://run.mocky.io/v3/:slug*",
			},
		];
	},
};
