'use client'

import { useEffect, useRef } from 'react'

import type { TTMap } from '~/types/t-map'
import type { Feature } from '~/types/feature'

function TMap({
  features,
  from,
  to,
}: {
  features: Feature[]
  from: { title: string; x: string; y: string }
  to: { title: string; x: string; y: string }
}) {
  const map = useRef<TTMap>()

  useEffect(() => {
    const { Tmapv3 } = window

    map.current = new Tmapv3.Map('map_div', {
      center: new Tmapv3.LatLng(
        (Number.parseFloat(from.y) + Number.parseFloat(to.y)) / 2,
        (Number.parseFloat(from.x) + Number.parseFloat(to.x)) / 2,
      ),
      width: '100%',
      height: '100dvh',
    })

    const fromLatLng = new Tmapv3.LatLng(from.y, from.x)
    const toLatLng = new Tmapv3.LatLng(to.y, to.x)

    new Tmapv3.Marker({
      position: fromLatLng,
      map: map.current,
    })

    new Tmapv3.Marker({
      position: toLatLng,
      map: map.current,
    })

    const paths = []

    for (const feature of features) {
      if (feature.geometry.type === 'LineString') {
        for (const coordinate of feature.geometry.coordinates) {
          const point = new window.Tmapv3.LatLng(coordinate[1], coordinate[0])
          paths.push(point)
        }
      }
    }

    const polylines = new window.Tmapv3.Polyline({
      path: paths,
      strokeColor: '#dd00dd',
      strokeWeight: 6,
      map: map.current,
    })

    console.log(polylines)

    const PTbounds = new Tmapv3.LatLngBounds()
    PTbounds.extend(fromLatLng)
    PTbounds.extend(toLatLng)

    map.current?.fitBounds(PTbounds)
  }, [from, to, features])

  return <div id="map_div" className="overflow-hidden" />
}

export { TMap }
