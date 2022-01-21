import { useState, useEffect } from "react";
import {
	getElectronique,
	getMecanique,
	getBrodeuse,
	getSurjeteuse,
} from "service/";
import { IProduct } from "helpers/interface";

const useProduit = (): Array<Array<IProduct>> => {
	const [electronique, setElectronique] = useState<Array<IProduct>>([]);
	const [mecanique, setMecanique] = useState<Array<IProduct>>([]);
	const [brodeuse, setBrodeuse] = useState<Array<IProduct>>([]);
	const [surjeteuse, setSurjeteuse] = useState<Array<IProduct>>([]);

	useEffect(() => {
		getElectronique().then((data: Array<IProduct>) => setElectronique(data));
		getMecanique().then((data: Array<IProduct>) => setMecanique(data));
		getBrodeuse().then((data: Array<IProduct>) => setBrodeuse(data));
		getSurjeteuse().then((data: Array<IProduct>) => setSurjeteuse(data));
	}, []);

	return [electronique, mecanique, brodeuse, surjeteuse];
};

export default useProduit;
