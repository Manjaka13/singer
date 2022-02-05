/*
	Here lies all endpoints
*/

const ws = (endpoint: string): string => {
	let url = "";
	switch (endpoint) {
		case "list":
			url = "user/";
			break;
		case "signin":
			url = "user/sign";
			break;
		case "verify":
			url = "user/verify";
			break;
	}
	return url;
};

export default ws;
