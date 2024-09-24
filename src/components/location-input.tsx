import { Card } from '~/components/ui/card'
import Input from '~/components/ui/input'
import React from 'react'

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
        {inputs.map((place, index) => (
          <div key={index}>
            <Input
              value={place}
              icon={index === 0 ? icon : undefined}
              onChange={(e) => onChange(index, e)}
            />
            {index !== inputs.length - 1 && (
              <hr className="my-4 border-dashed border-gray-400" />
            )}
          </div>
        ))}
      </Card>
    </>
  )
}
