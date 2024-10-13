import Image from 'next/image'

import { Card } from '~/components/ui/card'
import XIcon from '~/assets/x.svg'

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

function RecentPlace({ places }: { places: string[] }) {
  return (
    <Card className="w-full px-5 py-4">
      <ol className="flex flex-col gap-4">
        {places.map((place, index) => (
          <RecentPlaceItem key={`${place}-${index}`} place={place} />
        ))}
      </ol>
    </Card>
  )
}

export { RecentPlace, RecentPlaceItem }
