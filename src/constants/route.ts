const ROUTE = {
  LOGIN: '/',
  KAKAO_LOGIN: process.env.NEXT_PUBLIC_OAUTH_URL,
  MAIN: '/home',
  NAVIGATE: '/navigate',
  ONBOARD: '/on-board',
} as const

export { ROUTE }
