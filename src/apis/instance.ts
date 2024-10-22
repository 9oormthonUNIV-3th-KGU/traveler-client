import axios from 'axios'

const travelerInstance = axios.create({
  baseURL: 'https://api.travelersenior.site/api',
  withCredentials: true,
})

const tmapInstance = axios.create({
  baseURL: 'https://apis.openapi.sk.com/tmap',
  headers: {
    appKey: process.env.NEXT_PUBLIC_TMAP_APP_KEY,
  },
})

export { travelerInstance, tmapInstance }
