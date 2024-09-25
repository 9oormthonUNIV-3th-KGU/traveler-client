'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '~/components/ui/button'
import { cn } from '~/utils/cn'
import Gps from '~/assets/gps-green.svg'
import Main from '~/assets/main.svg'
import TopBar from '~/components/top-bar'
import LocationInput from '~/components/location-input'
import PopularLocationRank from '~/components/popular-location-rank'
import LocationPermissionButton from '~/components/location-permission-button'
import { TMap } from '~/components/t-map'

export default function Home() {
  const [isLocationAllowed, setIsLocationAllowed] = useState(false)
  const [inputs, setInputs] = useState(['출발지 입력', '도착지 입력'])
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  const [startLocation, setStartLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  const [endLocation, setEndLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  const [isLoading, setIsLoading] = useState(false)

  const gpsIcon = <Image src={Gps} alt="gps" width={40} />

  const router = useRouter() // useRouter 훅 사용

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

  const handleGeocoding = async (
    address: string,
    setLocation: React.Dispatch<
      React.SetStateAction<{ latitude: number; longitude: number } | null>
    >,
  ) => {
    const appKey = 'TTlRjX8uuV5HqbcQObDKesvd32lp4L39MAVEi4ha'
    const url = `https://apis.openapi.sk.com/tmap/geo/fullAddrGeo?version=1&format=json&appKey=${appKey}&fullAddr=${encodeURIComponent(
      address,
    )}`

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.coordinateInfo && data.coordinateInfo.coordinate.length > 0) {
        const result = data.coordinateInfo.coordinate[0]
        const latitude = result.lat.length > 0 ? result.lat : result.newLat
        const longitude = result.lon.length > 0 ? result.lon : result.newLon
        setLocation({
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        })
      } else {
        console.error('결과를 찾을 수 없습니다.')
      }
    } catch (error) {
      console.error('요청 실패', error)
    }
  }

  const handleSearchClick = async () => {
    setIsLoading(true)

    if (inputs[0]) {
      await handleGeocoding(inputs[0], setStartLocation)
    }
    if (inputs[1]) {
      await handleGeocoding(inputs[1], setEndLocation)
    }

    setIsLoading(false)

    if (startLocation && endLocation) {
      const startX = startLocation?.longitude?.toString() || ''
      const startY = startLocation?.latitude?.toString() || ''
      const endX = endLocation?.longitude?.toString() || ''
      const endY = endLocation?.latitude?.toString() || ''

      const params = new URLSearchParams({
        from: inputs[0],
        to: inputs[1],
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY,
      })

      router.push(`/navigate?${params.toString()}`)
    }
  }

  return (
    <div className="p-7">
      <TopBar />
      <LocationInput
        inputs={inputs}
        onChange={handleInputChange}
        icon={<button onClick={handleGpsClick}>{gpsIcon}</button>}
      />
      <Button
        onClick={handleSearchClick}
        className="mt-10 h-[70px] w-full text-3xl"
      >
        {isLoading ? '로딩 중...' : '길 찾기'}
      </Button>

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
        <Button className={cn('w-full bg-primary-400')}>제안하러 가기</Button>
      </Link>
      <Image src={Main} alt="main" />
      <LocationPermissionButton onClick={handleLocationPermission} />
    </div>
  )
}
