import React from 'react'

import { Card } from '~/components/ui/card'
import Input from '~/components/ui/input'

interface LocationInputProps {
  inputs: string[]
  onChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
}

export default function LocationInput({
  inputs,
  onChange,
  icon,
}: LocationInputProps) {
  return (
    <>
      <div className="flex items-center justify-center">
        <span className="text-center text-3xl text-gray-600">
          어디를 산책할까요?
        </span>
      </div>
      <Card className="mt-5">
        <Input value={inputs[0]} icon={icon} onChange={(e) => onChange(0, e)} />
        <hr className="my-4 border-dashed border-gray-400" />
        <Input value={inputs[1]} onChange={(e) => onChange(1, e)} />
      </Card>
    </>
  )
}
