import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const sandboxApi = new Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 8000,
});

export const giphyApi = new Axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: "eFoZ3mA4Yzms9gp5e8SgLu93J3WOy48R",
    rating: "pg",
    limit: 10,
  }
})