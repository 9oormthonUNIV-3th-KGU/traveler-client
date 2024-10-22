import { travelerInstance } from '~/apis/instance'

const deleteUserDelete = async (keepSearchHistory: boolean) => {
  const response = await travelerInstance.delete(
    `/user/delete?keepSearchHistory=${keepSearchHistory}`,
  )
  return response.data
}

const getUserMy = async () => {
  const response = await travelerInstance.get('/user/my')
  return response.data
}

const getUserUpdate = async (username: string) => {
  const response = await travelerInstance.get(
    `/user/update?username=${username}`,
  )
  return response.data
}

export { deleteUserDelete, getUserMy, getUserUpdate }
