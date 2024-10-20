import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  // 로그아웃 API 요청

  const cookieStore = cookies()
  cookieStore.delete('AccessToken')
  cookieStore.delete('RefreshToken')

  return NextResponse.next()
}
