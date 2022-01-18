import React, { useState, useEffect } from "react";
import {
	getElectronique,
	getMecanique,
	getBrodeuse,
	getSurjeteuse
} from "../service";

const useProduit = () => {
	const [electronique, setElectronique] = useState(null);
	const [mecanique, setMecanique] = useState(null);
	const [brodeuse, setBrodeuse] = useState(null);
	const [surjeteuse, setSurjeteuse] = useState(null);

	useEffect(() => {
		getElectronique().then((data) => setElectronique(data));
		getMecanique().then((data) => setMecanique(data));
		getBrodeuse().then((data) => setBrodeuse(data));
		getSurjeteuse().then((data) => setSurjeteuse(data));
	}, []);

	return [
		electronique,
		mecanique,
		brodeuse,
		surjeteuse
	];
};

export default useProduit;
