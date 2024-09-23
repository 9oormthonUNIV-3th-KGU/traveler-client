'use client'

import { useEffect } from 'react'

import { useWatchLocation } from '~/hooks/use-watch-location'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Tmapv3: any
  }
}

const options: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
}

function TMap() {
  const { location, cancelLocationWatch } = useWatchLocation(options)

  useEffect(() => {
    if (location) {
      const { Tmapv3 } = window

      const { latitude, longitude } = location
      const map = new Tmapv3.Map('map_div', {
        center: new Tmapv3.LatLng(latitude, longitude),
        width: '100%',
        height: '100dvh',
        zoom: 18,
      })

      new Tmapv3.Marker({
        position: new Tmapv3.LatLng(latitude, longitude),
        map: map,
      })
    }
    return cancelLocationWatch
  }, [location, cancelLocationWatch])

  return <div id="map_div" className="overflow-hidden" />
}

export { TMap }
