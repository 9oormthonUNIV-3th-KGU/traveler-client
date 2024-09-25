const ROUTE = {
  LOGIN: '/',
  KAKAO_LOGIN: process.env.NEXT_PUBLIC_OAUTH_URL,
  MAIN: '/navigate?from=카페워터쿨러&to=광교역[신분당선]&startX=127.03212618827865&startY=37.30078023598813&endX=127.04426765441936&endY=37.30209139534143',
  NAVIGATE: '/navigate',
  ONBOARD: '/on-board',
} as const

export { ROUTE }
