import { useState, useEffect } from 'react'

export function useLocationPermission() {
  const [isLocationAllowed, setIsLocationAllowed] = useState(false)

  useEffect(() => {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then((result) => {
        setIsLocationAllowed(result.state === 'granted')

        result.onchange = () => setIsLocationAllowed(result.state === 'granted')
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const handleLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setIsLocationAllowed(true)
          console.log('위치 정보가 허용되었습니다.')
        },
        () => {
          setIsLocationAllowed(false)
          console.error('위치 정보 허용이 거부되었습니다.')
        },
      )
    } else {
      console.log('이 브라우저는 위치 정보를 지원하지 않습니다.')
    }
  }

  return { isLocationAllowed, handleLocationPermission }
}
