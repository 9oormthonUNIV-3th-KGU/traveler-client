import React, { useRef, useState } from 'react'

import { Card } from '~/components/ui/card'
import Input from '~/components/ui/input'
import BottomSheet from '~/components/bottom-sheet'

interface LocationInputProps {
  inputs: string[]
  onChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
  onSendData: (data: string, index: number) => void
}

export default function PlaceInput({
  inputs,
  onChange,
  icon,
  onSendData,
}: LocationInputProps) {
  const inputRefs = useRef<string[]>(inputs)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedInput, setSelectedInput] = useState<number | null>(null)

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    inputRefs.current[index] = event.target.value
    onChange(index, event)
  }

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
        <span className="text-center text-large font-semibold text-gray-400">
          어디를 산책할까요?
        </span>
      </div>
      <Card className="m-5 w-full">
        <Input
          value={inputs[0]}
          icon={icon}
          onChange={(e) => handleInputChange(0, e)}
          onClick={() => handleInputClick(0)}
          index={0}
        />
        <hr className="my-4 border-dashed border-gray-400" />
        <Input
          value={inputs[1]}
          onChange={(e) => handleInputChange(1, e)}
          onClick={() => handleInputClick(1)}
          index={1}
        />
        <BottomSheet
          isOpen={isSearchOpen}
          onClose={handleCloseSearch}
          selectedInput={selectedInput}
          onSendData={(data, index) => handleData(data, index)}
        />
      </Card>
    </>
  )
}
