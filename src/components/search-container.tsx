'use client'

import { useState } from 'react'
import Search from '~/assets/search.svg'
import Image from 'next/image'

interface SearchContainerProps {
  isOpen: boolean
  onClose: () => void
  selectedInput: number | null
  onSendData: (data: string, index: number) => void
}

export default function SearchContainer({
  isOpen,
  onClose,
  selectedInput,
  onSendData,
}: SearchContainerProps) {
  const [inputValue, setInputValue] = useState('')
  const searchIcon = <Image src={Search} alt="search" />

  const handleClick = () => {
    if (selectedInput !== null) {
      onSendData(inputValue, selectedInput)
      onClose()
      setInputValue(inputValue)
    } else {
      console.error('선택된 인덱스가 없습니다.')
    }
  }

  return (
    <div
      className={`fixed z-10 h-[800px] w-[640px] translate-x-[-50%] rounded-2xl bg-gray-200 p-10 shadow transition-transform duration-500 ease-in-out ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-full opacity-0'}`}
      style={{ left: '50%', bottom: 0 }}
    >
      <div className="relative w-full">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={selectedInput === 0 ? '출발지 입력' : '도착지 입력'}
          className="h-28 w-full rounded-3xl border-gray-300 p-10 text-3xl shadow"
        />
        <button onClick={handleClick} className="absolute right-10 mt-10">
          {searchIcon}
        </button>
      </div>
    </div>
  )
}
