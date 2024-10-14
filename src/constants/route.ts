const ROUTE = {
  LOGIN: '/login',
  KAKAO_LOGIN: process.env.NEXT_PUBLIC_OAUTH_URL,
  MAIN: '/home',
  NAVIGATE: '/navigate',
  ONBOARD: '/on-board',
  MYPAGE: '/my-page',
  QUIT: '/quit',
} as const

export { ROUTE }
