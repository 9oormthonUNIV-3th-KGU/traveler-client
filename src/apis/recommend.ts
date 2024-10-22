import { travelerInstance } from '~/apis/instance'

const postRecommendLocation = async (data: {
  latitude: string
  longitude: string
}) => {
  const response = await travelerInstance.post('/recommend/location', data)
  return response.data
}

export { postRecommendLocation }
