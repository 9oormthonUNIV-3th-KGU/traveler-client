'use client'

import { useState } from 'react'
import { Card } from '~/components/ui/card'
import Input from '~/components/ui/input'
import Image from 'next/image'
import Gps from '~/assets/images/gps-green.png'

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
    <Card>
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
  )
}
