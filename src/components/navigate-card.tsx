import Image from 'next/image'

import { NavigateType } from '~/constants/navigate-type'
import { cn } from '~/utils/cn'

function NavigateCard({
  index,
  type,
  distance,
  description,
}: {
  index: number
  type: keyof typeof NavigateType
  distance?: number
  description: string
}) {
  return (
    <div className="relative flex w-[166px] shrink-0 flex-col overflow-hidden rounded bg-primary-500 shadow">
      <div className="absolute left-0.5 top-0.5 z-50 flex size-9 items-center justify-center rounded-full bg-gray-900">
        <span className="text-xl font-bold text-white">{index}</span>
      </div>
      <div className="relative h-[122px] w-full">
        <Image
          src={NavigateType[type].icon}
          alt="icon"
          className={cn(
            'absolute left-1/2 -translate-x-1/2',
            NavigateType[type].position === 'top' ? 'top-0' : 'bottom-0',
          )}
        />
        {distance && (
          <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2">
            <span
              className={cn(
                'text-[32px] font-bold leading-[30px]',
                NavigateType[type].position === 'top'
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
