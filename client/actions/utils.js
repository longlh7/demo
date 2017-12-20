import { config } from '../config/env'

export const getUrl = (path) => {
  let url = config.getEnv() + path
  return fetch( url , {
      headers: {
          "Accept-Encoding": "application/json"
      },
      method: 'GET',
  }).then((response) => response.json())
  .then((res) => {
      return res
  })
  .catch((error)=> {
      return error
  })
}
