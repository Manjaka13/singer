/*
	Here lies all endpoints
*/

const ws = (endpoint: string): string => {
	let url = "";
	switch (endpoint) {
		case "user_list":
			url = "user/";
			break;
		case "user_signin":
			url = "user/sign";
			break;
		case "user_verify":
			url = "user/verify";
			break;
		case "user_create":
			url = "user/new";
			break;
		case "user_remove":
			url = "user/delete";
			break;

		case "contact_list":
			url = "contacts/";
			break;
		case "contact_remove":
			url = "contacts/delete";
			break;
		case "contact_add":
			url = "contacts/new";
			break;
	}
	return url;
};

export default ws;
