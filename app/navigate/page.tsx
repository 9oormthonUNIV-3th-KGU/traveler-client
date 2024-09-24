'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'

import { TMap } from '~/components/t-map'
import { NavigateHeader } from '~/components/navigate-header'
import { NavigateSlider } from '~/components/navigate-slider'
import type { Feature } from '~/types/feature'

export default function Navigate({
  searchParams,
}: {
  searchParams: {
    from?: string
    to?: string
    startX?: string
    startY?: string
    endX?: string
    endY?: string
  }
}) {
  const { from, to, startX, startY, endX, endY } = searchParams
  const [features, setFeatures] = useState<Feature[] | null>(null)

  if (!from || !to || !startX || !startY || !endX || !endY) {
    notFound()
  }

  const start = {
    title: from,
    x: startX,
    y: startY,
  }
  const end = {
    title: to,
    x: endX,
    y: endY,
  }

  useEffect(() => {
    const fetchPath = async () => {
      const { features: res } = await fetch(
        'https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            appKey: process.env.NEXT_PUBLIC_TMAP_APP_KEY,
          },
          body: JSON.stringify({
            startX,
            startY,
            endX,
            endY,
            startName: from,
            endName: to,
          }),
        },
      ).then((response) => response.json())

      setFeatures(res)
    }

    fetchPath()
  }, [startX, startY, endX, endY, from, to])

  return (
    features && (
      <div className="relative min-h-dvh">
        <NavigateHeader
          from={start}
          to={end}
          time={features[0].properties.totalTime}
          distance={features[0].properties.totalDistance}
        />
        <TMap from={start} to={end} />
        <NavigateSlider features={features} />
      </div>
    )
  )
}
