'use client'

import { useEffect, useRef } from 'react'

import { useLocationPermission } from '~/hooks/use-location-permission'
import type { TTMap } from '~/types/t-map'
import { postRecommendLocation } from '~/apis/recommend'

function TMiniMap() {
  const map = useRef<TTMap>()
  const { isLocationAllowed, handleLocationPermission } =
    useLocationPermission()

  useEffect(() => {
    const { Tmapv3 } = window

    if (isLocationAllowed) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          map.current = new Tmapv3.Map('map_div', {
            center: new Tmapv3.LatLng(coords.latitude, coords.longitude),
            width: '100%',
            height: '100%',
            zoom: 13,
          })

          const drawMarkers = async () => {
            navigator.geolocation.getCurrentPosition(async (position) => {
              const markers = [
                new Tmapv3.LatLng(coords.latitude, coords.longitude),
              ]

              try {
                const { recommendLocations } = await postRecommendLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                })

                const places = recommendLocations.toSorted(
                  (a, b) => (b.views ?? 0) - (a.views ?? 0),
                )

                for (const place of places)
                  markers.push(
                    new Tmapv3.LatLng(place.latitude, place.longitude),
                  )
              } catch (error) {
                console.error('Unauthorized')
              }

              for (const marker of markers) {
                new Tmapv3.Marker({ position: marker, map: map.current })
              }
            })
          }

          drawMarkers()
        },
        console.error,
        { enableHighAccuracy: true },
      )
    } else {
      handleLocationPermission()
    }
  }, [isLocationAllowed, handleLocationPermission])

  return (
    <div className="aspect-square">
      <div id="map_div" className="pointer-events-none" />
    </div>
  )
}

export { TMiniMap }
