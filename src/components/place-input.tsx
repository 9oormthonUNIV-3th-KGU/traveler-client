'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { Button } from '~/components/ui/button'
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetTrigger,
} from '~/components/ui/bottom-sheet'
import SearchIcon from '~/assets/search.svg'
import { getPois } from '~/apis/tmap'
import { ScrollArea } from '~/components/ui/scroll-area'
import { ROUTE } from '~/constants/route'
import { postSearchLocation } from '~/apis/search'
import { useDebounce } from '~/hooks/use-debounce'

function PlaceInput() {
  const router = useRouter()

  const [from, setFrom] = useState<{
    name: string
    noorLat: string
    noorLon: string
  } | null>(null)
  const [to, setTo] = useState<{
    name: string
    noorLat: string
    noorLon: string
  } | null>(null)
  const [fromKeyword, setFromKeyword] = useState('')
  const [toKeyword, setToKeyword] = useState('')
  const [fromResult, setFromResult] = useState<
    { pkey: string; name: string; noorLat: string; noorLon: string }[]
  >([])
  const [toResult, setToResult] = useState<
    { pkey: string; name: string; noorLat: string; noorLon: string }[]
  >([])
  const debouncedFromKeyword = useDebounce(fromKeyword, 200)
  const debouncedToKeyword = useDebounce(toKeyword, 200)

  useEffect(() => {
    const fetchPlaces = async () => {
      if (debouncedFromKeyword === '') {
        setFromResult([])
        return
      }

      const response = await getPois(debouncedFromKeyword)
      setFromResult(response?.searchPoiInfo?.pois?.poi)
    }

    fetchPlaces()
  }, [debouncedFromKeyword])

  useEffect(() => {
    const fetchPlaces = async () => {
      if (debouncedToKeyword === '') {
        setToResult([])
        return
      }

      const response = await getPois(debouncedToKeyword)
      setToResult(response?.searchPoiInfo?.pois?.poi)
    }

    fetchPlaces()
  }, [debouncedToKeyword])

  const handleSubmit = async () => {
    if (from !== null && to !== null) {
      if (Cookies.get('AccessToken')) {
        const response = await postSearchLocation({
          locationName: to.name,
          longitude: to.noorLon,
          latitude: to.noorLat,
        })

        if (response !== 200) console.log("Couldn't save search location")
      }

      router.push(
        `${ROUTE.NAVIGATE}?from=${from?.name}&to=${to?.name}&startX=${from?.noorLon}&startY=${from?.noorLat}&endX=${to?.noorLon}&endY=${to?.noorLat}`,
      )
    }
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col divide-y-2 divide-dashed divide-gray-200 rounded bg-white p-5 shadow">
        <div className="pb-5">
          <BottomSheet>
            <BottomSheetTrigger asChild>
              <button
                type="button"
                className="w-full text-start text-2xl font-bold text-primary-500"
              >
                {from ? from.name : '출발지 입력'}
              </button>
            </BottomSheetTrigger>
            <BottomSheetContent className="h-[calc(100dvh-52px)]">
              <div className="mb-6 flex gap-2 overflow-hidden rounded p-5 shadow">
                <input
                  type="text"
                  className="w-full text-2xl font-medium text-gray-950 placeholder:text-gray-950"
                  placeholder="출발지 입력"
                  value={fromKeyword}
                  onChange={(e) => setFromKeyword(e.target.value)}
                />
                <button type="button" className="size-8 shrink-0">
                  <Image src={SearchIcon} alt="검색" className="size-8" />
                </button>
              </div>
              <ScrollArea className="h-[calc(100vh-168px)]">
                <ul className="space-y-5">
                  {fromResult?.map((poi) => (
                    <li
                      key={poi.pkey}
                      className="flex cursor-pointer items-center gap-4"
                      onClick={() => {
                        setFromKeyword(poi.name)
                        setFrom(poi)
                      }}
                    >
                      <Image src={SearchIcon} alt="검색" className="size-7" />
                      <span className="line-clamp-1 text-xl font-medium text-gray-950">
                        {poi.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </BottomSheetContent>
          </BottomSheet>
        </div>
        <div className="pt-5">
          <BottomSheet>
            <BottomSheetTrigger asChild>
              <button
                type="button"
                className="w-full text-start text-2xl font-medium text-gray-950"
              >
                {to ? to.name : '도착지 입력'}
              </button>
            </BottomSheetTrigger>
            <BottomSheetContent className="h-[calc(100dvh-52px)]">
              <div className="mb-6 flex gap-2 overflow-hidden rounded p-5 shadow">
                <input
                  type="text"
                  className="w-full text-2xl font-medium text-gray-950 placeholder:text-gray-950"
                  placeholder="도착지 입력"
                  value={toKeyword}
                  onChange={(e) => setToKeyword(e.target.value)}
                />
                <button type="button" className="size-8 shrink-0">
                  <Image src={SearchIcon} alt="검색" className="size-8" />
                </button>
              </div>
              <ScrollArea className="h-[calc(100vh-168px)]">
                <ul className="space-y-5">
                  {toResult?.map((poi) => (
                    <li
                      key={poi.pkey}
                      className="flex cursor-pointer items-center gap-4"
                      onClick={() => {
                        setToKeyword(poi.name)
                        setTo(poi)
                      }}
                    >
                      <Image src={SearchIcon} alt="검색" className="size-7" />
                      <span className="line-clamp-1 text-xl font-medium text-gray-950">
                        {poi.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </BottomSheetContent>
          </BottomSheet>
        </div>
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
