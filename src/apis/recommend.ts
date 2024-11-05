import { travelerInstance } from '~/apis/instance'
import type { Location } from '~/types/location'

const postRecommendLocation = async (data: {
  latitude: number
  longitude: number
}): Promise<{ recommendLocations: Location[] }> => {
  const response = await travelerInstance.post('/recommend/location', data)
  return response.data
}

export { postRecommendLocation }
