import Image from 'next/image'

import { SiteHeader } from '~/components/site-header'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import XIcon from '~/assets/x.svg'

export default function MyPage() {
  return (
    <div className="flex min-h-dvh flex-col justify-center px-5">
      <SiteHeader />
      <div className="flex flex-1 flex-col items-center space-y-8 pb-[76px] pt-6">
        <div className="space-y-2 text-center">
          <h1 className="text-[32px] font-semibold">안녕하세요, 고다윤님</h1>
          <p className="font-medium text-gray-800">supreme1mode@gmail.com</p>
        </div>
        <div className="flex w-full flex-1 flex-col items-center gap-4">
          <h2 className="text-[22px] font-semibold text-gray-950">
            최근 검색한 장소
          </h2>
          <Card className="w-full px-5 py-4">
            <ol className="flex flex-col gap-4">
              <li className="flex items-center justify-between">
                <span className="font-medium text-gray-950">
                  남영동양문 역삼점
                </span>
                <button>
                  <Image src={XIcon} alt="삭제" className="size-5" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-medium text-gray-950">바게트케이</span>
                <button>
                  <Image src={XIcon} alt="삭제" className="size-5" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-medium text-gray-950">유미식당 본점</span>
                <button>
                  <Image src={XIcon} alt="삭제" className="size-5" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-medium text-gray-950">
                  스테이키 가산퍼블릭점
                </span>
                <button>
                  <Image src={XIcon} alt="삭제" className="size-5" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-medium text-gray-950">
                  수미초밥 역삼점
                </span>
                <button>
                  <Image src={XIcon} alt="삭제" className="size-5" />
                </button>
              </li>
            </ol>
          </Card>
        </div>
        <div className="flex w-full flex-col gap-2">
          <Button variant="secondary" size="sm">
            로그아웃
          </Button>
          <Button variant="destructive" size="sm">
            회원탈퇴
          </Button>
        </div>
      </div>
    </div>
  )
}
