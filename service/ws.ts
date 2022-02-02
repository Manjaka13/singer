/*
	Here lies all endpoints
*/

const ws = (endpoint: string): string => {
	let url = "";
	switch (endpoint) {
		case "signin":
			url = "user/sign";
			break;
	}
	return url;
};

export default ws;
