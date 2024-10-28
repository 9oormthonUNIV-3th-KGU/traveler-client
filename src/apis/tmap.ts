import { tmapInstance } from '~/apis/instance'

const postRoutesPedestrian = async (data: {
  startX: string
  startY: string
  endX: string
  endY: string
  startName: string
  endName: string
  searchOption: string
}) => {
  const response = await tmapInstance.post('/routes/pedestrian?version=1', data)
  return response.data
}

const getPois = async (searchKeyword: string) => {
  const response = await tmapInstance.get(
    `/pois?version=1&searchKeyword=${searchKeyword}&appKey=${process.env.NEXT_PUBLIC_TMAP_APP_KEY}`,
  )
  return response.data
}

export { postRoutesPedestrian, getPois }
