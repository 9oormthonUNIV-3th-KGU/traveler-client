'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Card } from '~/components/ui/card'
import XIcon from '~/assets/x.svg'
import { postSearchGet } from '~/apis/search'

function RecentPlaceItem({ place }: { place: string }) {
  return (
    <li className="flex items-center justify-between">
      <span className="font-medium text-gray-950">{place}</span>
      <button>
        <Image src={XIcon} alt="삭제" className="size-5" />
      </button>
    </li>
  )
}

function RecentPlace() {
  const [places, setPlaces] = useState<
    | {
        locationName: string
        latitude: number
        longitude: number
      }[]
    | null
  >(null)

  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await postSearchGet()
      console.log(response)
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
          {places?.map((place, index) => (
            <RecentPlaceItem
              key={`${place}-${index}`}
              place={place.locationName}
            />
          ))}
        </ol>
      )}
    </Card>
  )
}

export { RecentPlace, RecentPlaceItem }
