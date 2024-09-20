'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import LogoMain from '~/assets/logo+main.svg'
import { Card, CardDescription, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { ROUTE } from '~/constants/route'

const steps = [
  {
    step: 0,
    title: '환영해요!',
    description:
      '산책은 목적지까지 경로 안내, 내 주변의 인기 있는 장소를 확인할 수 있어요.',
  },
  {
    step: 1,
    title: '목적지까지 경로 안내',
    description:
      '목적지가 있다면 장소 입력 후 경로를 선택해서 길찾기를 시작해 주세요.',
  },
  {
    step: 2,
    title: '위치 사용 허용',
    description:
      '지도를 사용하려면 설정이 필요해요. 위치 정보 사용을 허용해주세요!',
  },
  {
    step: 3,
    title: '산책 시작',
    description: '모든 준비가 끝났어요! 이제 산책을 시작해보세요.',
  },
]

export default function OnBoard() {
  const router = useRouter()

  const [step, setStep] = useState(0)
  const [isLocationAllowed, setIsLocationAllowed] = useState(false)

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') setIsLocationAllowed(true)
    })
  }, [])

  const handleNext = () => {
    if (step === 3) {
      router.push(ROUTE.MAIN)
    } else if (step === 2 && !isLocationAllowed) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(() => {
          setIsLocationAllowed(true)
          setStep(step + 1)
        }, console.error)
      } else {
        console.log('이 브라우저는 위치 정보를 지원하지 않아요.')
      }
    } else {
      setStep(step + 1)
    }
  }

  return (
    <div className="flex h-dvh flex-col justify-center gap-8">
      <div className="relative flex w-full flex-col items-center">
        <Image src={LogoMain} alt="산책" width={640} draggable={false} />
        <Card className="absolute bottom-0 w-full">
          <CardTitle>{steps[step].title}</CardTitle>
          <CardDescription>{steps[step].description}</CardDescription>
        </Card>
      </div>
      <Button onClick={handleNext}>
        {step === 3
          ? '시작하기'
          : step === 2 && !isLocationAllowed
            ? '위치 사용 허용'
            : '다음'}
      </Button>
    </div>
  )
}
