const apiBaseUrl = 'https://api.publicapis.org/';
const dogBaseUrl = 'https://random.dog/woof.json';

export const getApiData = (query: string) => {
  return fetch(`${apiBaseUrl}${query}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`)
      }
      return response.json()
    })
}

export const getDog = () => {
  return fetch(dogBaseUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`)
      }
      return response.json()
    })
}