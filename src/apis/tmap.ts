import { tmapInstance } from './instance'

const postRoutesPedestrian = async (data: {
  startX: string
  startY: string
  endX: string
  endY: string
  startName: string
  endName: string
}) => {
  const response = await tmapInstance.post('/routes/pedestrian?version=1', data)
  return response.data
}

export { postRoutesPedestrian }
