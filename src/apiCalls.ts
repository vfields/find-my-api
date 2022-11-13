const apiBaseUrl = 'https://api.publicapis.org/';
const dogBaseUrl = 'https://random.dog/woof.json';

const checkError = (response: Response) => {
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return response.json();
}

export const getApiData = (query: string) => {
  return fetch(`${apiBaseUrl}${query}`)
    .then(response => checkError(response));
}

export const getDog = () => {
  return fetch(dogBaseUrl)
    .then(response => checkError(response));
}