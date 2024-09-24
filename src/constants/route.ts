const ROUTE = {
	LOGIN: "/",
	KAKAO_LOGIN: "/on-board", // TODO: 백엔드에서 OAuth 구현이 완료되면 수정할게요!
	MAIN: "/home",
	NAVIGATE: "/navigate",
	ONBOARD: "/on-board",
} as const;

export { ROUTE };
