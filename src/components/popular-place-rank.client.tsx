'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import GoldMedalIcon from '~/assets/gold.svg'
import SilverMedalIcon from '~/assets/silver.svg'
import BronzeMedalIcon from '~/assets/bronze.svg'
import TrophyIcon from '~/assets/trophy.svg'
import { cn } from '~/utils/cn'
import { postRecommendLocation } from '~/apis/recommend'
import type { Location } from '~/types/location'

function AuthorizedPlaceRank() {
  const [places, setPlaces] = useState<Location[]>([])

  useEffect(() => {
    const fetchPlaces = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { recommendLocations } = await postRecommendLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })

        setPlaces(
          recommendLocations.toSorted(
            (a, b) => (b.views ?? 0) - (a.views ?? 0),
          ),
        )
      })
    }

    fetchPlaces()
  }, [])

  return (
    <ol
      className={cn(
        'relative z-10 -mt-8 w-full select-none overflow-hidden rounded bg-white shadow',
      )}
    >
      <li className="relative flex cursor-pointer items-center justify-center px-5 py-4 transition hover:bg-primary-500 hover:text-white">
        <Image
          src={GoldMedalIcon}
          alt="1등"
          className="absolute left-5 size-9"
        />
        <span className="line-clamp-1 w-[calc(100vw-152px)] text-xl font-semibold">
          {places[0]?.name ?? '1등'}
        </span>
        <Image src={TrophyIcon} alt="1등" className="absolute right-5 size-9" />
      </li>
      <li className="relative flex cursor-pointer items-center justify-center px-5 py-4 transition hover:bg-primary-500 hover:text-white">
        <Image
          src={SilverMedalIcon}
          alt="2등"
          className="absolute left-5 size-9"
        />
        <span className="line-clamp-1 w-[calc(100vw-152px)] text-xl font-semibold">
          {places[1]?.name ?? '2등'}
        </span>
      </li>
      <li className="relative flex cursor-pointer items-center justify-center px-5 py-4 transition hover:bg-primary-500 hover:text-white">
        <Image
          src={BronzeMedalIcon}
          alt="3등"
          className="absolute left-5 size-9"
        />
        <span className="line-clamp-1 w-[calc(100vw-152px)] text-xl font-semibold">
          {places[2]?.name ?? '3등'}
        </span>
      </li>
    </ol>
  )
}

export { AuthorizedPlaceRank }
