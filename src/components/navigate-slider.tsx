'use client'

import useEmblaCarousel from 'embla-carousel-react'

import { NavigateCard } from '~/components/navigate-card'
import { NavigateType } from '~/constants/navigate-type'
import type { Feature } from '~/types/feature'

function NavigateSlider({ features }: { features: Feature[] }) {
  const [emblaRef] = useEmblaCarousel({
    containScroll: false,
  })

  return (
    <div
      className="absolute bottom-3 z-50 w-full select-none overflow-hidden p-5"
      ref={emblaRef}
    >
      <div className="flex w-full gap-2">
        {features
          .filter(
            (feature) =>
              feature.geometry.type === 'Point' &&
              NavigateType[feature.properties.turnType],
          )
          .map((feature, index) => (
            <NavigateCard
              key={feature.properties.index}
              index={index + 1}
              type={feature.properties.turnType}
              description={feature.properties.description}
            />
          ))}
      </div>
    </div>
  )
}

export { NavigateSlider }
