import Image from 'next/image'
import Link from 'next/link'

import Logo from '~/assets/logo.svg'
import User from '~/assets/user.svg'
import { ROUTE } from '~/constants/route'

function SiteHeader() {
  return (
    <header className="flex w-full items-center justify-between gap-4 py-2">
      <Link href={ROUTE.MAIN}>
        <Image src={Logo} alt="산책" className="h-8 w-auto" />
      </Link>
      {/* TODO: 로그인 유무에 따른 분기 처리 */}
      <Link href={true ? ROUTE.MYPAGE : ROUTE.LOGIN}>
        <Image src={User} alt="사용자" className="size-9" />
      </Link>
    </header>
  )
}

export { SiteHeader }
