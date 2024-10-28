'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '~/components/ui/button'
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetTitle,
} from '~/components/ui/bottom-sheet'
import SearchIcon from '~/assets/search.svg'
import { getPois } from '~/apis/tmap'
import { ScrollArea } from '~/components/ui/scroll-area'
import { ROUTE } from '~/constants/route'
import { postSearchLocation } from '~/apis/search'
import { useDebounce } from '~/hooks/use-debounce'
import type { PlaceResult } from '~/types/t-map'

function PlaceInput() {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [target, setTarget] = useState<'출발지' | '도착지' | null>()
  const [placeKeyword, setPlaceKeyword] = useState('')
  const [placeResult, setPlaceResult] = useState<PlaceResult[]>([])
  const [from, setFrom] = useState<PlaceResult>(null)
  const [to, setTo] = useState<PlaceResult>(null)

  const debouncedPlaceKeyword = useDebounce(placeKeyword, 200)

  useEffect(() => {
    const fetchPlaces = async () => {
      if (debouncedPlaceKeyword === '') {
        setPlaceResult([])
      } else {
        const response = await getPois(debouncedPlaceKeyword)
        setPlaceResult(response?.searchPoiInfo?.pois?.poi)
      }
    }

    fetchPlaces()
  }, [debouncedPlaceKeyword])

  const handleTriggerBottomSheet = (target: '출발지' | '도착지') => {
    setTarget(target)
    setPlaceResult([])
    setPlaceKeyword((target === '출발지' ? from?.name : to?.name) || '')
    setOpen(true)
  }

  const handleUpdatePlace = (poi: PlaceResult) => {
    if (target === '출발지') setFrom(poi)
    else setTo(poi)
    setOpen(false)
  }

  const handleSubmit = async () => {
    if (from !== null && to !== null) {
      try {
        const response = await postSearchLocation({
          locationName: to.name,
          longitude: to.noorLon,
          latitude: to.noorLat,
        })

        if (response !== 200) console.log("Couldn't save search location")
      } catch (error) {
        console.error(error)
      } finally {
        router.push(
          `${ROUTE.NAVIGATE}?from=${from?.name}&to=${to?.name}&startX=${from?.noorLon}&startY=${from?.noorLat}&endX=${to?.noorLon}&endY=${to?.noorLat}`,
        )
      }
    }
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col rounded bg-white p-5 shadow">
        <BottomSheet open={open} onOpenChange={setOpen}>
          <div className="divide-y-2 divide-dashed divide-gray-200">
            <button
              type="button"
              className="w-full pb-5 text-start text-2xl font-bold text-primary-500"
              onClick={() => handleTriggerBottomSheet('출발지')}
            >
              {from ? from.name : '출발지 입력'}
            </button>
            <button
              type="button"
              className="w-full pt-5 text-start text-2xl font-medium text-gray-950"
              onClick={() => handleTriggerBottomSheet('도착지')}
            >
              {to ? to.name : '도착지 입력'}
            </button>
          </div>
          <BottomSheetContent className="h-[calc(100dvh-52px)]">
            <BottomSheetTitle className="sr-only">장소 검색</BottomSheetTitle>
            <div className="mb-6 flex shrink-0 gap-2 overflow-hidden rounded p-5 shadow">
              <input
                type="text"
                className="w-full text-2xl font-medium text-gray-950 placeholder:text-gray-950 focus:outline-none"
                placeholder={`${target} 입력`}
                value={placeKeyword}
                onChange={(e) => setPlaceKeyword(e.target.value)}
              />
              <button type="button" className="size-8">
                <Image src={SearchIcon} alt="검색" />
              </button>
            </div>
            <ScrollArea className="h-full max-h-[calc(100vh-168px)]">
              <ul className="space-y-5">
                {placeResult?.map((poi) => (
                  <li key={poi?.pkey}>
                    <button
                      type="button"
                      onClick={() => handleUpdatePlace(poi)}
                      className="flex cursor-pointer items-center gap-4"
                    >
                      <Image src={SearchIcon} alt="검색" className="size-7" />
                      <span className="line-clamp-1 text-xl font-medium text-gray-950">
                        {poi?.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </BottomSheetContent>
        </BottomSheet>
      </div>
      <Button
        size="lg"
        disabled={from === null || to === null}
        onClick={handleSubmit}
      >
        길 찾기
      </Button>
    </div>
  )
}

export { PlaceInput }
