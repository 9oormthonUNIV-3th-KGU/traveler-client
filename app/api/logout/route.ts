import { cookies } from 'next/headers'

export async function POST() {
  // 로그아웃 API 요청

  const cookieStore = cookies()
  cookieStore.delete('AccessToken')
  cookieStore.delete('RefreshToken')

  return new Response('로그아웃 되었습니다.', {
    status: 200,
  })
}
