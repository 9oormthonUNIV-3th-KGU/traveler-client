import Image from 'next/image'

import LogoMain from '~/assets/logo+main.svg'
import { LoginButton } from '~/components/login-button'
import { OnBoardIndicator } from '~/components/on-board-indicator'
import { Card, CardDescription, CardTitle } from '~/components/ui/card'

export default function Home() {
  return (
    <div className="flex h-dvh flex-col justify-center">
      <div className="relative flex w-full flex-col items-center">
        <Image src={LogoMain} alt="산책" width={640} draggable={false} />
        <Card className="absolute bottom-0 w-full items-center gap-3">
          <CardTitle>간편 로그인으로 산책 시작</CardTitle>
          <CardDescription>
            카카오톡 계정으로 빠른 로그인을 도와드릴게요!
          </CardDescription>
        </Card>
      </div>
      <div className="mb-2 mt-6 flex w-full items-center justify-center p-2">
        <OnBoardIndicator step={0} />
      </div>
      <LoginButton />
    </div>
  )
}
