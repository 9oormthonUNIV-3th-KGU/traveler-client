'use client'

import { useState } from 'react'
import Image from 'next/image'
import TopBar from '~/components/top-bar'
import LocationInput from '~/components/location-input'
import PopularLocationRank from '~/components/popular-location-rank'
import { Button } from '~/components/ui/button'
import Main from '~/assets/main.svg'

const location = ['출발지 입력', '도착지 입력']

export default function Home() {
  const [inputs, setInputs] = useState(location)

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
      <PopularLocationRank></PopularLocationRank>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 mt-3 text-center text-4xl text-gray-900">
          서비스가 마음에 드셨나요?
        </div>
        <div className="mb-8 text-center text-2xl text-gray-700">
          서비스 개선을 위해서 제안해주세요!
        </div>
      </div>
      <Button className="h-20 w-full bg-primary-300 text-2xl text-gray-900">
        제안하러 가기
      </Button>
      <Image src={Main} alt="main" />
    </>
  )
}
