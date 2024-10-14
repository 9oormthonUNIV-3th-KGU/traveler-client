'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useEmblaCarousel from 'embla-carousel-react'

import LogoMain from '~/assets/logo+main.svg'
import { Card, CardDescription, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { ROUTE } from '~/constants/route'
import { OnBoardIndicator } from '~/components/on-board-indicator'
import { useLocationPermission } from '~/hooks/use-location-permission'

const steps = [
  {
    step: 1,
    title: '환영해요!',
    description:
      '산책은 목적지까지 경로 안내, 내 주변의 인기 있는 장소를 확인할 수 있어요.',
  },
  {
    step: 2,
    title: '목적지까지 경로 안내',
    description:
      '목적지가 있다면 장소 입력 후 경로를 선택해서 길찾기를 시작해 주세요.',
  },
  {
    step: 3,
    title: '위치 사용 허용',
    description:
      '지도를 사용하려면 설정이 필요해요. 위치 정보 사용을 허용해주세요!',
  },
  {
    step: 4,
    title: '산책 시작',
    description: '모든 준비가 끝났어요! 이제 산책을 시작해보세요.',
  },
]

export default function OnBoard() {
  const router = useRouter()
  const [emblaRef, emblaApi] = useEmblaCarousel({ watchDrag: false })
  const [step, setStep] = useState(1)

  const { isLocationAllowed, handleLocationPermission } =
    useLocationPermission()

  const handleNext = () => {
    if (step === 4) {
      router.push(ROUTE.MAIN)
    } else if (step === 3 && !isLocationAllowed) {
      handleLocationPermission()
    } else {
      setStep(step + 1)
      emblaApi?.scrollTo(step)
    }
  }

  return (
    <div className="flex min-h-dvh flex-col justify-center px-5">
      <div className="relative flex w-full flex-col items-center">
        <Image src={LogoMain} alt="산책" width={640} draggable={false} />
        <Card
          className="absolute bottom-0 w-full overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-10">
            {steps.map((step) => (
              <div
                className="flex flex-shrink-0 basis-full flex-col items-center gap-3"
                key={`step-${step.step}`}
              >
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="mb-2 mt-6 flex w-full items-center justify-center p-2">
        <OnBoardIndicator step={step} />
      </div>
      <Button onClick={handleNext}>
        {step === 4
          ? '시작하기'
          : step === 3 && !isLocationAllowed
            ? '위치 사용 허용'
            : '다음'}
      </Button>
    </div>
  )
}
