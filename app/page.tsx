'use client'

import Image from 'next/image'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import Main from '~/assets/main.svg'
import { PlaceInput } from '~/components/place-input'
import { PopularPlaceRank } from '~/components/popular-place-rank'
import { SiteHeader } from '~/components/site-header'
import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/utils/cn'

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if (Cookies.get('AccessToken') !== undefined) setAuthenticated(true)
  }, [])

  return (
    <div className="flex min-h-dvh flex-col justify-center px-5 text-center">
      <SiteHeader />
      <div className="flex w-full flex-1 flex-col items-center py-4">
        <section className="mb-12 flex w-full flex-col items-center gap-2">
          <h2 className="text-[22px] font-semibold text-gray-400">
            어디를 산책할까요?
          </h2>
          <PlaceInput />
        </section>
        <section className="mb-10 flex w-full flex-col items-center gap-4">
          <h2 className="text-[22px] font-semibold text-gray-950">
            내 주변 인기 있는 장소
          </h2>
          <PopularPlaceRank />
          {authenticated ? (
            <span className="text-sm font-medium text-gray-500">
              먼저, 위치정보를 허용해주세요!
            </span>
          ) : (
            <div className="flex w-full flex-col gap-3">
              <span className="text-sm font-medium text-gray-500">
                인기 있는 장소를 확인하기 위해서는 로그인 해주세요
              </span>
              <Link
                href="/login"
                className={cn(buttonVariants({ size: 'sm' }), 'w-full')}
              >
                로그인하기
              </Link>
            </div>
          )}
        </section>
        <section className="flex w-full flex-col items-center">
          <h2 className="text-[22px] font-semibold text-gray-950">
            서비스가 마음에 드셨나요?
          </h2>
          <span className="mb-6 text-sm font-medium text-gray-600">
            서비스 개선을 위해서 제안해주세요!
          </span>
          <Link
            href="https://7zc54lj88vd.typeform.com/to/Pjwsa8Xz"
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'w-full',
            )}
          >
            제안하러 가기
          </Link>
          <Image src={Main} alt="산책" />
        </section>
      </div>
    </div>
  )
}
