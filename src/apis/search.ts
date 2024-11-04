import { travelerInstance } from '~/apis/instance'
import type { Location } from '~/types/location'

const postSearchDelete = async (locationId: number) => {
  const response = await travelerInstance.post(
    `/search/delete?locationId=${locationId}`,
  )
  return response.status
}

const postSearchGet = async (): Promise<Location[]> => {
  const response = await travelerInstance.post('/search/get')
  return response.data
}

const postSearchLocation = async (data: {
  locationName: string
  latitude: string
  longitude: string
}) => {
  const response = await travelerInstance.post('/search/location', data)
  return response.status
}

export { postSearchDelete, postSearchGet, postSearchLocation }
