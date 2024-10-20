import { Button } from '~/components/ui/button'
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetTrigger,
} from '~/components/ui/bottom-sheet'
import SearchIcon from '~/assets/search.svg'
import Image from 'next/image'

function PlaceInput() {
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
                출발지 입력
              </button>
            </BottomSheetTrigger>
            <BottomSheetContent className="h-[calc(100dvh-52px)]">
              <div className="flex gap-2 overflow-hidden rounded p-5 shadow">
                <input
                  type="text"
                  className="w-full text-2xl font-medium text-gray-950 placeholder:text-gray-950"
                  placeholder="출발지 입력"
                />
                <button type="button" className="size-8 shrink-0">
                  <Image src={SearchIcon} alt="검색" className="size-8" />
                </button>
              </div>
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
                도착지 입력
              </button>
            </BottomSheetTrigger>
            <BottomSheetContent className="h-[calc(100dvh-52px)]">
              <div className="flex gap-2 overflow-hidden rounded p-5 shadow">
                <input
                  type="text"
                  className="w-full text-2xl font-medium text-gray-950 placeholder:text-gray-950"
                  placeholder="도착지 입력"
                />
                <button type="button" className="size-8 shrink-0">
                  <Image src={SearchIcon} alt="검색" className="size-8" />
                </button>
              </div>
            </BottomSheetContent>
          </BottomSheet>
        </div>
      </div>
      <Button size="lg" disabled={true}>
        길 찾기
      </Button>
    </div>
  )
}

export { PlaceInput }
