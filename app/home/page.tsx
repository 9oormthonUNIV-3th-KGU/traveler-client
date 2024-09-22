'use client'

import { useState } from 'react'
import { Card } from '~/components/ui/card'
import Input from '~/components/ui/input'
import Image from 'next/image'
import Gps from '~/assets/images/gps-green.png'
import Topbar from '~/components/topbar'
import { Button } from '~/components/ui/button'
import PopularRank from '~/components/popular-rank'

const location = ['출발지 입력', '도착지 입력']

export default function Home() {
  const [inputs, setInputs] = useState(location)
  const gpsIcon = <Image src={Gps} alt="gps" />

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
      <Topbar />
      <div className="flex items-center justify-center">
        <span className="text-center text-3xl text-gray-600">
          어디를 산책할까요?
        </span>
      </div>
      <Card className="mt-5">
        {inputs.map((place, index) => (
          <div key={index}>
            <Input
              value={place}
              icon={gpsIcon}
              onChange={(e) => handleInputChange(index, e)}
            />
            {index !== inputs.length - 1 && (
              <hr className="my-4 border-dashed border-gray-400" />
            )}
          </div>
        ))}
      </Card>
      <Button className="mt-10 h-24 w-full text-3xl">길 찾기</Button>
      <div className="flex items-center justify-center">
        <span className="mb-5 mt-12 text-center text-4xl text-gray-900">
          내 주변 인기있는 장소
        </span>
      </div>
      <PopularRank></PopularRank>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-10 mt-3 text-center text-2xl text-gray-700">
          먼저 오른쪽 하단 버튼을 눌러 위치정보를 허용해주세요!
        </div>
        <div className="mb-2 mt-3 text-center text-4xl text-gray-900">
          서비스가 마음에 드셨나요?
        </div>
        <div className="mb-5 text-center text-2xl text-gray-700">
          서비스 개선을 위해서 제안해주세요!
        </div>
      </div>
    </>
  )
}
