'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Card } from '~/components/ui/card'
import XIcon from '~/assets/x.svg'
import { postSearchDelete, postSearchGet } from '~/apis/search'
import type { SearchHistory } from '~/types/search-history'

function RecentPlaceItem({ place }: { place: SearchHistory }) {
  const handleDelete = async () => {
    const response = await postSearchDelete(place.id)
    if (response === 200) location.reload()
    console.error('Failed to delete search history')
  }

  return (
    <li className="flex items-center justify-between">
      <span className="font-medium text-gray-950">{place.name}</span>
      <button type="button" onClick={handleDelete}>
        <Image src={XIcon} alt="삭제" className="size-5" />
      </button>
    </li>
  )
}

function RecentPlace() {
  const [places, setPlaces] = useState<SearchHistory[] | null>(null)

  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await postSearchGet()
      setPlaces(response)
    }

    fetchPlaces()
  }, [])

  return (
    <Card className="w-full px-5 py-4">
      {places?.length === 0 ? (
        <div className="flex h-12 items-center justify-center">
          <span className="text-center font-medium text-gray-500">
            최근 검색한 장소가 없어요
          </span>
        </div>
      ) : (
        <ol className="flex flex-col gap-4">
          {places?.map((place) => (
            <RecentPlaceItem key={`${place}-${place.id}`} place={place} />
          ))}
        </ol>
      )}
    </Card>
  )
}

export { RecentPlace, RecentPlaceItem }
