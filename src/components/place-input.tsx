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
import type { POI } from '~/types/t-map'
import { cn } from '~/utils/cn'

function PlaceInput() {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [target, setTarget] = useState<'출발지' | '도착지' | null>()
  const [placeKeyword, setPlaceKeyword] = useState('')
  const [placeResult, setPlaceResult] = useState<POI[]>([])
  const [from, setFrom] = useState<POI>(null)
  const [to, setTo] = useState<POI>(null)
  const [mode, setMode] = useState<0 | 10 | 30>(0) // 0: 최적 경로, 10: 최단 경로, 30: 편안한 경로

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

  const handleUpdatePlace = (poi: POI) => {
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
          `${ROUTE.NAVIGATE}?from=${from?.name}&to=${to?.name}&startX=${from?.noorLon}&startY=${from?.noorLat}&endX=${to?.noorLon}&endY=${to?.noorLat}&mode=${mode}`,
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
              className="w-full pb-5 text-start"
              onClick={() => handleTriggerBottomSheet('출발지')}
            >
              {from ? (
                <div className="flex w-full justify-between gap-4">
                  <span className="shrink-0 text-2xl font-medium text-gray-700">
                    출발지
                  </span>
                  <span className="line-clamp-1 text-right text-2xl font-medium text-gray-950">
                    {from.name}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-primary-500">
                  출발지 입력
                </span>
              )}
            </button>
            <button
              type="button"
              className="w-full pt-5 text-start"
              onClick={() => handleTriggerBottomSheet('도착지')}
            >
              {to ? (
                <div className="flex w-full justify-between gap-4">
                  <span className="shrink-0 text-2xl font-medium text-gray-700">
                    도착지
                  </span>
                  <span className="line-clamp-1 text-right text-2xl font-medium text-gray-950">
                    {to.name}
                  </span>
                </div>
              ) : (
                <span
                  className={cn(
                    from
                      ? 'text-2xl font-bold text-primary-500'
                      : 'text-2xl font-medium text-gray-950',
                  )}
                >
                  도착지 입력
                </span>
              )}
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
      {from && to && (
        <div className="flex flex-col divide-y-[1px] divide-white rounded bg-primary-100 px-5 py-2">
          <button
            type="button"
            className={cn(
              mode === 0
                ? 'text-2xl font-bold text-gray-950'
                : 'text-2xl font-medium text-gray-500',
              'pb-2 transition-colors',
            )}
            onClick={() => setMode(0)}
          >
            최적 경로
          </button>
          <button
            type="button"
            className={cn(
              mode === 10
                ? 'text-2xl font-bold text-gray-950'
                : 'text-2xl font-medium text-gray-500',
              'py-2 transition-colors',
            )}
            onClick={() => setMode(10)}
          >
            최단 경로
          </button>
          <button
            type="button"
            className={cn(
              mode === 30
                ? 'text-2xl font-bold text-gray-950'
                : 'text-2xl font-medium text-gray-500',
              'pt-2 transition-colors',
            )}
            onClick={() => setMode(30)}
          >
            편안한 경로
          </button>
        </div>
      )}
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
