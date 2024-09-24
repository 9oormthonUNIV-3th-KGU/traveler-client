'use client'

import { useEffect } from 'react'
import { cn } from '~/utils/cn'
import { cva } from 'cva'
import { useWatchLocation } from '~/hooks/use-watch-location'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Tmapv3: any
  }
}

const mapVariants = cva({
  variants: {
    size: {
      default: 'h-[100vh] w-full',
      small: 'h-[60vh] w-full',
      smaller: 'h-[30vh] w-full',
    },
    border: {
      none: '',
      rounded: 'rounded-xl',
    },
    shadow: {
      none: '',
      shadow: 'shadow',
    },
  },
  defaultVariants: {
    size: 'default',
    border: 'none',
    shadow: 'none',
  },
})

const options: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
} as const

interface TMapProps {
  currentLocation?: { latitude: number; longitude: number } | null
  size?: 'default' | 'small' | 'smaller'
  border?: 'none' | 'rounded'
  shadow?: 'none' | 'shadow'
}

function TMap({
  currentLocation,
  size = 'default',
  border = 'none',
  shadow = 'none',
}: TMapProps) {
  const { location, cancelLocationWatch } = useWatchLocation(options)

  useEffect(() => {
    const effectiveLocation = currentLocation || location

    if (
      effectiveLocation &&
      effectiveLocation.latitude != null &&
      effectiveLocation.longitude != null
    ) {
      const { Tmapv3 } = window

      const { latitude, longitude } = effectiveLocation
      const map = new Tmapv3.Map('map_div', {
        center: new Tmapv3.LatLng(latitude, longitude),
        zoom: 18,
      })

      new Tmapv3.Marker({
        position: new Tmapv3.LatLng(latitude, longitude),
        map: map,
      })
    }
    return cancelLocationWatch
  }, [location, currentLocation, cancelLocationWatch])

  return (
    <div
      id="map_div"
      className={cn('overflow-hidden', mapVariants({ size, border, shadow }))}
    />
  )
}

export { TMap }
