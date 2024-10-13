const ROUTE = {
  LOGIN: '/login',
  KAKAO_LOGIN: process.env.NEXT_PUBLIC_OAUTH_URL,
  MAIN: '/',
  NAVIGATE: '/navigate',
  ONBOARD: '/on-board',
  MYPAGE: '/my-page',
} as const

export { ROUTE }
