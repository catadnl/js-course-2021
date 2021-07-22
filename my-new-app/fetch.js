export function callApi(url = '', method = 'GET', body = {}) {
	return fetch(url, {
		method,

		...(method === 'GET' ? {} : { body: JSON.stringify(body) }),
	})
		.then(response => response.json())
		.catch(err => {
			console.log('Server ERRORED', err);
		});
}
