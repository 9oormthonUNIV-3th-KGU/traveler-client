import { travelerInstance } from '~/apis/instance'

const postRecommendLocation = async (data: {
  latitude: number
  longitude: number
}) => {
  const response = await travelerInstance.post('/recommend/location', data)
  return response.data
}

export { postRecommendLocation }
