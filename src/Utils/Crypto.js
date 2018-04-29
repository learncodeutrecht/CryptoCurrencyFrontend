import 'whatwg-fetch';

const Crypto = {};
const baseUrl = 'http://188.166.66.158:80/compare/test_one';
const starApi = 'https://swapi.co/api/people/1/'

Crypto.getData = () => {
  const url = `${baseUrl}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      console.log(jsonResponse.data);
      return jsonResponse.data;
    });
  });
};

export default Crypto;
