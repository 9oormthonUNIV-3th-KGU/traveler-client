import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.has('AccessToken')
  const refreshToken = request.cookies.has('RefreshToken')

  if (accessToken && refreshToken) return NextResponse.next()

  if (!accessToken && refreshToken) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/my-page/:path*', '/quit/:path*'],
}
