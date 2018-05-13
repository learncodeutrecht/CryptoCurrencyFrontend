import 'whatwg-fetch';

const Crypto = {};
const baseUrl = 'http://206.189.12.80:8000/test_view/';
// const starApi = 'https://swapi.co/api/people/1/'

Crypto.getData = () => {
  const url = `${baseUrl}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      console.log(jsonResponse);
      return jsonResponse;
    });
  });
};

export default Crypto;
