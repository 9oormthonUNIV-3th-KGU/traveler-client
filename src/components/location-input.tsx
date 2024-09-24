'use client'

import { Card } from '~/components/ui/card'
import Input from '~/components/ui/input'
import React from 'react'
import { useState } from 'react'
import SearchContainer from './search-container'

interface LocationInputProps {
  inputs: string[]
  onChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
  onSendData: (data: string, index: number) => void
}

export default function LocationInput({
  inputs,
  onChange,
  icon,
  onSendData,
}: LocationInputProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedInput, setSelectedInput] = useState<number | null>(null)

  const handleInputClick = (index: number) => {
    setSelectedInput(index)
    setIsSearchOpen(true)
  }

  const handleCloseSearch = () => {
    setIsSearchOpen(false)
  }

  const handleData = (data: string, index: number) => {
    onSendData(data, index)
  }

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
              onClick={() => handleInputClick(index)}
              onChange={(e) => onChange(index, e)}
              index={index}
            />
            {index !== inputs.length - 1 && (
              <hr className="my-4 border-dashed border-gray-400" />
            )}
          </div>
        ))}
        <SearchContainer
          isOpen={isSearchOpen}
          onClose={handleCloseSearch}
          selectedInput={selectedInput}
          onSendData={(data, index) => handleData(data, index)}
        />
      </Card>
    </>
  )
}
