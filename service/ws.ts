/*
	Here lies all endpoints
*/

const isLocal = (): boolean =>
	process.env && process.env.MODE && process.env.MODE === "local" ? true : false;

const ws = (endpoint: string): string => {
	let ep = "";
	switch (endpoint) {
		case "mecanique":
			ep = isLocal()
				? "products/mecanique.json"
				: "3bfc00a9-48c7-48a1-b56d-9236bc39a1bb";
			break;
		case "electronique":
			ep = isLocal()
				? "products/electronique.json"
				: "8639dcae-b606-46c5-864a-3a0a069b933d";
			break;
		case "brodeuse":
			ep = isLocal()
				? "products/brodeuse.json"
				: "8fbfd989-0d17-4609-82b8-0c70e4b394de";
			break;
		default:
			ep = isLocal()
				? "products/surjeteuse.json"
				: "9d8a8fa0-0e37-4af8-b017-f9b26c53097d";
			break;
	}
	return ep;
};

export default ws;
