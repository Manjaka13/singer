/*
	Here lies all endpoints
*/

let ws = {};
if(process.env.MODE === "local")
	ws = {
		test: "test.json",
		mecanique: "mecanique.json",
		electronique: "electronique.json",
		brodeuse: "brodeuse.json",
		surjeteuse: "surjeteuse.json"
	}
else
	ws = {
		test: "8c73e05d-849e-45da-b7d7-5af81bc79f63",
		mecanique: "3bfc00a9-48c7-48a1-b56d-9236bc39a1bb",
		electronique: "8639dcae-b606-46c5-864a-3a0a069b933d",
		brodeuse: "8fbfd989-0d17-4609-82b8-0c70e4b394de",
		surjeteuse: "9d8a8fa0-0e37-4af8-b017-f9b26c53097d"
	};

export default ws;
