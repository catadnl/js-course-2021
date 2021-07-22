export function callApi<T>(url = '', method = 'GET', body = {}): Promise<T> {
	return fetch(url, {
		method,
		...(method === 'GET' ? {} : { body: JSON.stringify(body) }),
	})
		.then(response => response.json())
		.catch(err => {
			console.log('Server ERRORED', err);
		});
}
