import http from "./http";

/*
	For doing API calls
*/

export const testService = () => http.get("test");
export const getElectronique = () => http.get("electronique");
export const getMecanique = () => http.get("mecanique");
export const getBrodeuse = () => http.get("brodeuse");
export const getSurjeteuse = () => http.get("surjeteuse");
