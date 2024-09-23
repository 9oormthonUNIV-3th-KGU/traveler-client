import Image from 'next/image'

import Straight from '~/assets/straight.svg'
import Left from '~/assets/left.svg'
import Right from '~/assets/right.svg'
import UTurn from '~/assets/u-turn.svg'
import Left8 from '~/assets/left-8.svg'
import Left10 from '~/assets/left-10.svg'
import Right2 from '~/assets/right-2.svg'
import Right4 from '~/assets/right-4.svg'
import Bridge from '~/assets/bridge.svg'
import Underground from '~/assets/underground.svg'
import Stairs from '~/assets/stairs.svg'
import Ramp from '~/assets/ramp.svg'
import StairsRamp from '~/assets/stairs+ramp.svg'
import Crosswalk from '~/assets/crosswalk.svg'
import LeftCrosswalk from '~/assets/left-crosswalk.svg'
import RightCrosswalk from '~/assets/right-crosswalk.svg'
import Left8Crosswalk from '~/assets/left-8-crosswalk.svg'
import Left10Crosswalk from '~/assets/left-10-crosswalk.svg'
import Right2Crosswalk from '~/assets/right-2-crosswalk.svg'
import Right4Crosswalk from '~/assets/right-4-crosswalk.svg'
import Elevator from '~/assets/elevator.svg'
import { cn } from '~/utils/cn'

const NavigateTypes = {
  11: { icon: Straight, position: 'top' },
  12: { icon: Left, position: 'top' },
  13: { icon: Right, position: 'top' },
  14: { icon: UTurn, position: 'top' },
  16: { icon: Left8, position: 'top' },
  17: { icon: Left10, position: 'top' },
  18: { icon: Right2, position: 'top' },
  19: { icon: Right4, position: 'top' },
  125: { icon: Bridge, position: 'bottom' },
  126: { icon: Underground, position: 'top' },
  127: { icon: Stairs, position: 'bottom' },
  128: { icon: Ramp, position: 'bottom' },
  129: { icon: StairsRamp, position: 'top' },
  211: { icon: Crosswalk, position: 'bottom' },
  212: { icon: LeftCrosswalk, position: 'bottom' },
  213: { icon: RightCrosswalk, position: 'bottom' },
  214: { icon: Left8Crosswalk, position: 'bottom' },
  215: { icon: Left10Crosswalk, position: 'bottom' },
  216: { icon: Right2Crosswalk, position: 'bottom' },
  217: { icon: Right4Crosswalk, position: 'bottom' },
  218: { icon: Elevator, position: 'top' },
} as const

function NavigateCard({
  index,
  type,
  distance,
  description,
}: {
  index: number
  type: keyof typeof NavigateTypes
  distance?: number
  description: string
}) {
  return (
    <div className="relative flex w-[166px] flex-col overflow-hidden rounded bg-primary-500 shadow">
      <div className="absolute left-0.5 top-0.5 z-50 flex size-9 items-center justify-center rounded-full bg-gray-900">
        <span className="text-xl font-bold text-white">{index}</span>
      </div>
      <div className="relative h-[122px] w-full">
        <Image
          src={NavigateTypes[type].icon}
          alt="icon"
          className={cn(
            'absolute left-1/2 -translate-x-1/2',
            NavigateTypes[type].position === 'top' ? 'top-0' : 'bottom-0',
          )}
        />
        {distance && (
          <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2">
            <span
              className={cn(
                'text-[32px] font-bold leading-[30px]',
                NavigateTypes[type].position === 'top'
                  ? 'text-white'
                  : 'text-primary-500',
              )}
            >
              {distance}m
            </span>
          </div>
        )}
      </div>
      <div className="flex h-[72px] items-center justify-center px-2.5 py-1.5">
        <span className="line-clamp-3 text-center text-sm font-semibold text-white">
          {description}
        </span>
      </div>
    </div>
  )
}

export { NavigateCard }
