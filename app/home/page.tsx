'use client'

import { useState, useEffect } from 'react'
import { Button } from '~/components/ui/button'
import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/utils/cn'

import Image from 'next/image'
import Link from 'next/link'

import TopBar from '~/components/top-bar'
import LocationInput from '~/components/location-input'
import PopularLocationRank from '~/components/popular-location-rank'
import Main from '~/assets/main.svg'
import LocationPermissionButton from '~/components/location-permission-button'

const location = ['출발지 입력', '도착지 입력']

export default function Home() {
  const [inputs, setInputs] = useState(location)
  const [isLocationAllowed, setIsLocationAllowed] = useState(false)

  useEffect(() => {
    const checkLocationPermission = async () => {
      const result = await navigator.permissions.query({ name: 'geolocation' })

      if (result.state === 'granted') {
        setIsLocationAllowed(true)
      } else if (result.state === 'denied') {
        setIsLocationAllowed(false)
      }

      result.onchange = () => {
        if (result.state === 'granted') {
          setIsLocationAllowed(true)
        } else {
          setIsLocationAllowed(false)
        }
      }
    }

    checkLocationPermission()
  }, [])

  const handleLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setIsLocationAllowed(true)
          console.log('위치 정보가 허용되었습니다.')
        },
        () => {
          setIsLocationAllowed(false)
          console.error('위치 정보 허용이 거부되었습니다.')
        },
      )
    } else {
      console.log('이 브라우저는 위치 정보를 지원하지 않습니다.')
    }
  }

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newInputs = [...inputs]
    newInputs[index] = event.target.value
    setInputs(newInputs)
  }

  return (
    <>
      <TopBar />
      <LocationInput inputs={inputs} onChange={handleInputChange} />
      <div className="flex items-center justify-center">
        <span className="mb-5 mt-12 text-center text-3xl text-gray-900">
          내 주변 인기있는 장소
        </span>
      </div>
      <PopularLocationRank />
      {!isLocationAllowed && (
        <div className="mt-3 text-center text-2xl text-gray-700">
          먼저 오른쪽 하단 버튼을 눌러 위치정보를 허용해주세요!
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 mt-10 text-center text-3xl text-gray-900">
          서비스가 마음에 드셨나요?
        </div>
        <div className="mb-8 text-center text-xl text-gray-700">
          서비스 개선을 위해서 제안해주세요!
        </div>
      </div>
      <Link href="https://7zc54lj88vd.typeform.com/to/Pjwsa8Xz">
        <Button className={cn(buttonVariants(), 'w-full bg-primary-400')}>
          제안하러 가기
        </Button>
      </Link>
      <Image src={Main} alt="main" />
      <LocationPermissionButton onClick={handleLocationPermission} />
    </>
  )
}
