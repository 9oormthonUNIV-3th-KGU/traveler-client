import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.has('AccessToken')
  const refreshToken = request.cookies.has('RefreshToken')

  if (accessToken && refreshToken) return NextResponse.next()

  if (!accessToken && refreshToken) {
    await fetch('https://api.travelersenior.site/api/token/reissue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${request.cookies.get('RefreshToken')}`,
      },
    })
    return NextResponse.next()
  }

  if (
    request.nextUrl.pathname.startsWith('/quit') ||
    request.nextUrl.pathname.startsWith('/my-page')
  )
    return NextResponse.redirect(new URL('/login', request.url))

  return NextResponse.next()
}
