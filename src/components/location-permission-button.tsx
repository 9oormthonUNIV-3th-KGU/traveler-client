import Image from 'next/image'
import { Button } from '~/components/ui/button'
import Gps from '~/assets/gps-white.svg'
import { useLocationPermission } from '~/hooks/use-location-permission'

export default function LocationPermissionButton() {
  const { handleLocationPermission } = useLocationPermission()

  return (
    <div className="relative w-full">
      <Button
        onClick={handleLocationPermission}
        className="absolute bottom-0 right-4 h-20 rounded-3xl"
      >
        <Image src={Gps} alt="gps" width={40} />
      </Button>
    </div>
  )
}
