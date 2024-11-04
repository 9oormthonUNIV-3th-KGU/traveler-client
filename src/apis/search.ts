import { travelerInstance } from '~/apis/instance'
import type { SearchHistory } from '~/types/search-history'

const postSearchDelete = async (locationId: number) => {
  const response = await travelerInstance.post(
    `/search/delete?locationId=${locationId}`,
  )
  return response.status
}

const postSearchGet = async (): Promise<SearchHistory[]> => {
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
