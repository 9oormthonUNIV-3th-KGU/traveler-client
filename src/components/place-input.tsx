import React, { useRef, useState } from 'react'

import { Card } from '~/components/ui/card'
import Input from '~/components/ui/input'
import BottomSheet from '~/components/bottom-sheet'

interface PlaceInputProps {
  inputs: string[]
  onChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
  onSendData: (data: string, index: number) => void
  isBottomSheetOpen: boolean
}

export default function PlaceInput({
  inputs,
  onChange,
  icon,
  onSendData,
  isBottomSheetOpen
}: PlaceInputProps) {
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
    if (!isBottomSheetOpen) return;

    setSelectedInput(index)
    setIsSearchOpen(true)
  }

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation()
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
          <div onClick={() => handleInputClick(0)}>
            <Input
              value={inputs[0]}
              icon={<span onClick={handleIconClick}>{icon}</span>}
              onClick={() => handleInputClick(0)}
              isDisabled={true}
            />
          </div>
        <hr className="my-4 border-dashed border-gray-400" />
          <div onClick={() => handleInputClick(1)}>
            <Input
              value={inputs[1]}
              onClick={() => handleInputClick(1)}
              isDisabled={true} 
            />
          </div>
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
