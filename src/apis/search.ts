import { travelerInstance } from '~/apis/instance'

const postSearchGet = async () => {
  const response = await travelerInstance.post('/search/get')
  return response.data
}

const postSearchLocation = async (data: {
  locationName: string
  latitude: number
  longitude: number
}) => {
  const response = await travelerInstance.post('/search/location', data)
  return response.data
}

export { postSearchGet, postSearchLocation }
