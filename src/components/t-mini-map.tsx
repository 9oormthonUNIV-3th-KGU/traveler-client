'use client'

import { useEffect, useRef, useState } from 'react'

import { useLocationPermission } from '~/hooks/use-location-permission'
import type { TTMap } from '~/types/t-map'
import type { Location } from '~/types/location'
import { postRecommendLocation } from '~/apis/recommend'

function TMiniMap() {
  const map = useRef<TTMap>()
  const [places, setPlaces] = useState<Location[]>([])
  const { isLocationAllowed, handleLocationPermission } =
    useLocationPermission()

  useEffect(() => {
    const fetchPlaces = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { recommendLocations } = await postRecommendLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })

        setPlaces(
          recommendLocations.toSorted(
            (a, b) => (b.views ?? 0) - (a.views ?? 0),
          ),
        )
      })
    }

    try {
      fetchPlaces()
    } catch (error) {
      console.error('Unauthorized')
    }
  }, [])

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

          const markers = []
          markers.push(new Tmapv3.LatLng(coords.latitude, coords.longitude))
          for (const place of places)
            markers.push(new Tmapv3.LatLng(place.latitude, place.longitude))
          for (const marker of markers) {
            new Tmapv3.Marker({ position: marker, map: map.current })
          }
        },
        console.error,
        { enableHighAccuracy: true },
      )
    } else {
      handleLocationPermission()
    }
  }, [places, isLocationAllowed, handleLocationPermission])

  return <div id="map_div" className="pointer-events-none aspect-square" />
}

export { TMiniMap }
