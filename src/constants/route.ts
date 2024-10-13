const ROUTE = {
  LOGIN: '/login',
  KAKAO_LOGIN: process.env.NEXT_PUBLIC_OAUTH_URL,
  MAIN: '/',
  NAVIGATE: '/navigate',
  ONBOARD: '/on-board',
} as const

export { ROUTE }
