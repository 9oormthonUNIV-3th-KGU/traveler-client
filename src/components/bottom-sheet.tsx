'use client'

import { useState, useEffect, useRef } from 'react'
import Search from '~/assets/search.svg'
import Image from 'next/image'
import axios from 'axios'

interface SearchContainerProps {
  isOpen: boolean
  onClose: () => void
  selectedInput: number | null
  onSendData: (data: string, index: number) => void
}

interface POI {
  name: string
}

export default function BottomSheet({
  isOpen,
  onClose,
  selectedInput,
  onSendData,
}: SearchContainerProps) {
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const bottomSheetRef = useRef<HTMLDivElement>(null)

  const searchIcon = <Image src={Search} alt="search" />

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bottomSheetRef.current &&
        !bottomSheetRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (inputValue.length > 0) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(
            'https://apis.openapi.sk.com/tmap/pois',
            {
              params: {
                version: '1',
                format: 'json',
                searchKeyword: inputValue,
                resCoordType: 'EPSG3857',
                reqCoordType: 'WGS84GEO',
                appKey: process.env.NEXT_PUBLIC_TMAP_APP_KEY,
              },
            },
          )
          if (response.data?.searchPoiInfo?.pois?.poi) {
            const results = response.data.searchPoiInfo.pois.poi
            setSuggestions(results.map((poi: POI) => poi.name))
          } else {
            console.error('No POI data available')
          }
        } catch (error) {
          console.error('Error fetching suggestions:', error)
        }
      }
      fetchSuggestions()
    } else {
      setSuggestions([])
    }
  }, [inputValue])

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (selectedInput !== null) {
      onSendData(inputValue, selectedInput)
      onClose()
      setInputValue('')
      setSuggestions([])
    } else {
      console.error('선택된 인덱스가 없습니다.')
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setSuggestions([])
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50"
          onClick={onClose}
        />
      )}
      <div
        ref={bottomSheetRef}
        className={`fixed z-20 h-[800px] w-[640px] translate-x-[-50%] rounded-2xl bg-gray-50 p-10 shadow transition-transform duration-500 ease-in-out ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-full opacity-0'}`}
        style={{ left: '50%', bottom: 0 }}
      >
        <div className="relative w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={selectedInput === 0 ? '출발지 입력' : '도착지 입력'}
            className="h-28 w-full rounded-3xl border-gray-300 p-10 text-extra shadow outline-none"
          />
          <button onClick={handleClick} className="absolute right-10 mt-10">
            {searchIcon}
          </button>

          {suggestions.length > 0 && (
            <ul className="absolute mt-4 max-h-[620px] w-full overflow-y-auto text-medium">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="flex cursor-pointer flex-row p-6 hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {searchIcon}
                  <span className="ml-4">{suggestion}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
