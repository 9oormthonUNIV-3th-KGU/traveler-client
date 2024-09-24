import type { NavigateType } from '~/constants/navigate-type'

interface Feature {
  geometry: { type: string; coordinates: number[][] }
  properties: {
    index: number
    turnType: keyof typeof NavigateType
    description: string
    totalTime: number
    totalDistance: number
  }
}

export type { Feature }
