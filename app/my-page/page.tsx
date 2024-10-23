'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { buttonVariants } from '~/components/ui/button'
import { SiteHeader } from '~/components/site-header'
import { RecentPlace } from '~/components/recent-place'
import { LogoutButton } from '~/components/logout-button'
import { ROUTE } from '~/constants/route'
import { getUserMy } from '~/apis/user'

export default function MyPage() {
  const [userInfo, setUserInfo] = useState<{
    username: string
    email: string
  } | null>(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUserMy()
      setUserInfo(response)
    }

    fetchUserInfo()
  }, [])

  return (
    <div className="flex min-h-dvh flex-col justify-center px-5">
      <SiteHeader />
      <div className="flex flex-1 flex-col items-center space-y-8 pb-[76px] pt-6">
        <div className="space-y-2 text-center">
          <h1 className="text-[32px] font-semibold">
            안녕하세요, {userInfo?.username}님
          </h1>
          <p className="font-medium text-gray-800">{userInfo?.email}</p>
        </div>
        <div className="flex w-full flex-1 flex-col items-center gap-4">
          <h2 className="text-[22px] font-semibold text-gray-950">
            최근 검색한 장소
          </h2>
          <RecentPlace />
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
