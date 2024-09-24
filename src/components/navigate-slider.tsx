import { NavigateCard } from '~/components/navigate-card'
import { NavigateType } from '~/constants/navigate-type'
import type { Feature } from '~/types/feature'

function NavigateSlider({ features }: { features: Feature[] }) {
  return (
    <div className="absolute bottom-5 z-50 w-full overflow-x-scroll px-5">
      <div className="flex w-full justify-center gap-2">
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
