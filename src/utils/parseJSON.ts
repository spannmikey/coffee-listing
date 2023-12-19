export const useParsedData = <T>(data: T) => {
	return JSON.parse(JSON.stringify(data));
};
