const baseUrl = 'https://api.publicapis.org/'

export const getApiData = (query: string) => {
  return fetch(`${baseUrl}${query}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`)
      }
      return response.json()
    })
}