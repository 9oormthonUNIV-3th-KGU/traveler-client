import { NextResponse } from 'next/server'

export async function POST() {
  // 로그아웃 API 요청

  const response = NextResponse.json({ message: '로그아웃 되었습니다.' })

  response.cookies.delete('AccessToken')
  response.cookies.delete('RefreshToken')

  return response
}
