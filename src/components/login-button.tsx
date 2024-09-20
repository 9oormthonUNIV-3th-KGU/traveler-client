'use client'

import Image from 'next/image'
import Link from 'next/link'

import Kakao from '~/assets/kakao.svg'
import { buttonVariants } from '~/components/ui/button'
import { ROUTE } from '~/constants/route'
import { cn } from '~/utils/cn'

function LoginButton() {
  return (
    <Link
      href={ROUTE.KAKAO_LOGIN}
      className={cn(
        buttonVariants(),
        'bg-[#FEE500] text-black hover:bg-[#FEE500]',
      )}
    >
      <Image src={Kakao} alt="카카오톡" draggable={false} className="mr-2.5" />
      카카오톡으로 시작하기
    </Link>
  )
}

export { LoginButton }
