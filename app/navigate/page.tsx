'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'

import { TMap } from '~/components/t-map'
import { NavigateHeader } from '~/components/navigate-header'
import { NavigateSlider } from '~/components/navigate-slider'
import type { Feature } from '~/types/feature'
import { postRoutesPedestrian } from '~/apis/tmap'

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
    mode?: string
  }
}) {
  const { from, to, startX, startY, endX, endY, mode } = searchParams
  const [features, setFeatures] = useState<Feature[] | null>(null)

  if (!from || !to || !startX || !startY || !endX || !endY || !mode) {
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
      const { features: res } = await postRoutesPedestrian({
        startX,
        startY,
        endX,
        endY,
        startName: from,
        endName: to,
        searchOption: mode,
      })

      setFeatures(res)
    }

    fetchPath()
  }, [startX, startY, endX, endY, from, to, mode])

  return (
    features && (
      <div className="relative min-h-dvh">
        <NavigateHeader
          from={start}
          to={end}
          mode={mode}
          time={features[0].properties.totalTime}
          distance={features[0].properties.totalDistance}
        />
        <TMap features={features} from={start} to={end} />
        <NavigateSlider features={features} />
      </div>
    )
  )
}
