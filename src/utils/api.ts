export const URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
export const TOKEN = '4a4b8f3ccb32d975f987ebd63245041e7bd63bc9';

export const checkResponse = (res: Response) => {
	if (!res.ok) {
		throw new Error('Сервер не отвечает.');
	}
	return res.json();
}