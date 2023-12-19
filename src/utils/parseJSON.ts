export const parsedData = <T>(data: T) => {
	return JSON.parse(JSON.stringify(data));
};
