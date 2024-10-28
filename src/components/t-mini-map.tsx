'use client'

import { useEffect, useRef } from 'react'
import { useLocationPermission } from '~/hooks/use-location-permission'

import type { TTMap } from '~/types/t-map'

function TMiniMap() {
  const map = useRef<TTMap>()
  const { isLocationAllowed, handleLocationPermission } =
    useLocationPermission()

  useEffect(() => {
    const { Tmapv3 } = window

    if (isLocationAllowed) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          map.current = new Tmapv3.Map('map_div', {
            center: new Tmapv3.LatLng(
              position.coords.latitude,
              position.coords.longitude,
            ),
            width: '100%',
            height: '100%',
            zoom: 16,
          })

          const currentLatLng = new Tmapv3.LatLng(
            position.coords.latitude,
            position.coords.longitude,
          )

          new Tmapv3.Marker({
            position: currentLatLng,
            map: map.current,
          })
        },
        console.error,
        { enableHighAccuracy: true },
      )
    } else {
      handleLocationPermission()
    }
  }, [isLocationAllowed, handleLocationPermission])

  return <div id="map_div" className="aspect-square" />
}

export { TMiniMap }
