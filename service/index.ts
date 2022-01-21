import http from "service/http";

/*
	API calls
*/

export const getElectronique = () => http.get("electronique");
export const getMecanique = () => http.get("mecanique");
export const getBrodeuse = () => http.get("brodeuse");
export const getSurjeteuse = () => http.get("surjeteuse");
