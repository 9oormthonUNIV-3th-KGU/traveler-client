import { NextResponse } from "next/server";

export async function POST() {
	// 로그아웃 API 요청

	const response = NextResponse.json({ message: "로그아웃 되었습니다." });

	response.cookies.set("AccessToken", "", {
		expires: new Date(0),
		path: "/",
		domain: ".travelersenior.site",
	});
	response.cookies.set("RefreshToken", "", {
		expires: new Date(0),
		path: "/",
		domain: ".travelersenior.site",
	});

	return response;
}
