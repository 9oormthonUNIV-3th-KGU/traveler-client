import { travelerInstance } from '~/apis/instance'

const postTokenLogout = async () => {
  const response = await travelerInstance.post('/token/logout')
  return response.status
}

const postTokenReissue = async () => {
  const response = await travelerInstance.post('/token/reissue')
  return response.data
}

export { postTokenLogout, postTokenReissue }
