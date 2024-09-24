import Image from 'next/image'
import Link from 'next/link'

import CaretLeft from '~/assets/caret-left.svg'
import Switch from '~/assets/switch.svg'
import { ROUTE } from '~/constants/route'

function NavigateHeader({
  from,
  to,
  time,
  distance,
}: {
  from: string
  to: string
  time: number
  distance: number
}) {
  return (
    <div className="absolute top-2 z-50 w-full px-5">
      <div className="flex flex-col gap-3 rounded border-2 border-primary-500 bg-white p-4 shadow">
        <div className="flex items-center justify-between">
          <div>
            <Link href={ROUTE.MAIN}>
              <Image src={CaretLeft} alt="뒤로가기" width={24} />
            </Link>
          </div>
          <div className="flex flex-1 justify-end gap-2">
            <span className="font-bold text-gray-600">{time}분</span>
            <span className="text-gray-600">|</span>
            <span className="font-bold text-gray-600">{distance}m</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="basis-1/2">
            <span className="line-clamp-1 font-bold">{from}</span>
          </div>
          <Link
            href={{
              pathname: ROUTE.NAVIGATE,
              query: {
                from: to,
                to: from,
              },
            }}
          >
            <Image src={Switch} alt="" width={28} />
          </Link>
          <div className="basis-1/2 text-end">
            <span className="line-clamp-1 font-bold">{to}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { NavigateHeader }
