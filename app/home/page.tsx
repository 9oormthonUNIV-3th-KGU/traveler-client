'use client'

import { useState, useEffect } from 'react'
import { Button } from '~/components/ui/button'
import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/utils/cn'
import { ROUTE } from '~/constants/route'

import Image from 'next/image'
import Link from 'next/link'
import Gps from '~/assets/gps-green.svg'

import TopBar from '~/components/top-bar'
import LocationInput from '~/components/location-input'
import PopularLocationRank from '~/components/popular-location-rank'
import Main from '~/assets/main.svg'
import LocationPermissionButton from '~/components/location-permission-button'
import { TMap } from '~/components/t-map'

export default function Home() {
  const [isLocationAllowed, setIsLocationAllowed] = useState(false)
  const [inputs, setInputs] = useState(['출발지 입력', '도착지 입력'])
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  const gpsIcon = <Image src={Gps} alt="gps" width={40} />

  useEffect(() => {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then((result) => {
        setIsLocationAllowed(result.state === 'granted')

        result.onchange = () => setIsLocationAllowed(result.state === 'granted')
      })
      .catch((error) => {
        console.error(error)
      })
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

  const handleGpsClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setCurrentLocation({ latitude, longitude })
        },
        (error) => {
          console.error('현재 위치를 가져오지 못했습니다.', error)
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
    <div className="p-7">
      <TopBar />
      <LocationInput
        inputs={inputs}
        onChange={handleInputChange}
        icon={<button onClick={handleGpsClick}>{gpsIcon}</button>}
      />
      <Link
        href={{
          pathname: ROUTE.NAVIGATE,
          query: {
            from: inputs[0],
            to: inputs[1],
          },
        }}
      >
        <Button className="mt-10 h-[70px] w-full text-3xl">길 찾기</Button>
      </Link>
      <div className="flex items-center justify-center">
        <span className="mb-5 mt-12 text-center text-3xl text-gray-900">
          내 주변 인기있는 장소
        </span>
      </div>
      <TMap
        currentLocation={currentLocation}
        size="small"
        border="rounded"
        shadow="shadow"
      />
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
    </div>
  )
}
