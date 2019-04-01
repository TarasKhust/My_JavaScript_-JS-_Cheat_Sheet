import fetch from 'node-fetch'
import axios from 'axios'

// Promise

const getCharacterData = () => {
	return new Promise(function(resolve, reject) {
		const error = true;

		if (!error) {
			setTimeout(() => {
				resolve({id: 1, name: 'Rick Sanchez'});
			}, 1000);
		} else {
			reject('Error getting data');
		}
	});
};

getCharacterData()
.then(response => console.log(response))
.catch(error => console.log(error));

// Featch API
const url = 'https://rickandmortyapi.com/api/character/1';

fetch(url)
.then(response => {
	console.log('response.ok:', response.ok);
	if (!response.ok) {
		throw 'Error';
	}
	return response.json();
})
.then(data => {
	console.log('data:', data);
})
.catch(error => {
	console.log('error:', error);
});

// Axios
axios(url)
.then(response => {
	console.log('response:', response.data);
})
.catch(error => {
	console.log('error:', error);
});

// Async / Await
const getCharacterLocationAsync = async url => {
	try {
		const response = await axios('http://wwww.bllala.com');

		console.log('response.data:', response.data);

		const response2 = await axios(response.data.location.url);

		console.log('response2.data:', response2.data);
	} catch (error) {
		console.log('error:', error);
	}
};

getCharacterLocationAsync(url);

//Promise.all
const promise1 = axios('https://rickandmortyapi.com/api/character/1');
const promise2 = axios('https://rickandmortyapi.com/api/character/2');
const promise3 = axios('https://rickandmortyapi.com/api/character/3');

Promise.all([promise1, promise2, promise3]).then(
		values => {
			console.log('values:', values);
		},
		reason => {
			console.log('reason:', reason);
		}
// );