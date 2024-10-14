import Link from 'next/link'

import { buttonVariants } from '~/components/ui/button'
import { SiteHeader } from '~/components/site-header'
import { RecentPlace } from '~/components/recent-place'
import { LogoutButton } from '~/components/logout-button'
import { ROUTE } from '~/constants/route'

export default function MyPage() {
  const userName = '고다윤'
  const email = 'supreme1mode@gmail.com'
  const recentPlaces = [
    '남영동양문 역삼점',
    '바게트케이',
    '유미식당 본점',
    '스테이키 가산퍼블릭점',
    '수미초밥 역삼점',
  ]

  return (
    <div className="flex min-h-dvh flex-col justify-center px-5">
      <SiteHeader />
      <div className="flex flex-1 flex-col items-center space-y-8 pb-[76px] pt-6">
        <div className="space-y-2 text-center">
          <h1 className="text-[32px] font-semibold">
            안녕하세요, {userName}님
          </h1>
          <p className="font-medium text-gray-800">{email}</p>
        </div>
        <div className="flex w-full flex-1 flex-col items-center gap-4">
          <h2 className="text-[22px] font-semibold text-gray-950">
            최근 검색한 장소
          </h2>
          <RecentPlace places={recentPlaces} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <LogoutButton />
          <Link
            href={ROUTE.QUIT}
            className={buttonVariants({ variant: 'destructive', size: 'sm' })}
          >
            회원탈퇴
          </Link>
        </div>
      </div>
    </div>
  )
}
