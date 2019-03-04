const parametrsFetsch = (method = 'POST') => {
	return {
		method: method,
		body: JSON.stringify({
			title: 'foo',
			body: 'bar',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	};
};

const add = async () => {
	return await makeRequest('https://jsonplaceholder.typicode.com/posts',
			parametrsFetsch());
};
const put = async () => {
	return await makeRequest('https://jsonplaceholder.typicode.com/posts/1',
			parametrsFetsch('PUT'));
};
const deleted = async () => {
	return await makeRequest('https://jsonplaceholder.typicode.com/posts/1',
			parametrsFetsch('DELETE'));
};

const makeRequest = (url, parametr) => {
	return fetch(url, parametr).
			then(response => response.json()).
			then(json => console.table(json));
};

const allMethod = async () => {
	await add();
	await put();
	await deleted();
};
allMethod();