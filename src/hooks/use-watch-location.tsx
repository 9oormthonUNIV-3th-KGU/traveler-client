import { useCallback, useEffect, useRef, useState } from 'react'

const useWatchLocation = (options: PositionOptions = {}) => {
  const [location, setLocation] = useState<{
    latitude: number
    longitude: number
  }>()
  const [error, setError] = useState('')
  const locationWatchId = useRef(0)

  const handleSuccess = useCallback((pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords

    setLocation({
      latitude,
      longitude,
    })
  }, [])

  const handleError = useCallback((err: GeolocationPositionError) => {
    setError(err.message)
  }, [])

  const cancelLocationWatch = useCallback(() => {
    const { geolocation } = navigator

    if (locationWatchId.current && geolocation)
      geolocation.clearWatch(locationWatchId.current)
  }, [])

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      setError('위치 정보 수집에 실패했습니다.')
      return
    }

    locationWatchId.current = geolocation.watchPosition(
      handleSuccess,
      handleError,
      options,
    )

    return cancelLocationWatch
  }, [handleSuccess, handleError, cancelLocationWatch, options])

  return { location, cancelLocationWatch, error }
}

export { useWatchLocation }
