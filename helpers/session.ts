/*
	Manipulate sessions
*/

const Session = {
	set: (key: string, value: string | number | object | void | undefined): void => {
		sessionStorage.setItem(key, JSON.stringify(value))
	},
	get: (key: string): string | number | object | void | undefined => {
		return JSON.parse(sessionStorage.getItem(key));
	},
	remove: (key: string): void => sessionStorage.removeItem(key),
	clear: (): void => sessionStorage.clear()
};

export default Session;