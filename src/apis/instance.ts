import axios from 'axios'
import Cookies from 'js-cookie'

const travelerInstance = axios.create({
  baseURL: 'https://api.travelersenior.site/api',
  withCredentials: true,
})

travelerInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get('AccessToken')}`
  return config
})

const tmapInstance = axios.create({
  baseURL: 'https://apis.openapi.sk.com/tmap',
  headers: {
    appKey: process.env.NEXT_PUBLIC_TMAP_APP_KEY,
  },
})

export { travelerInstance, tmapInstance }
