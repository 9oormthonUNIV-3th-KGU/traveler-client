import Image from 'next/image'
import { Button } from '~/components/ui/button'
import Gps from '~/assets/gps-white.svg'
import { useLocationPermission } from '~/hooks/use-location-permission'

export default function LocationPermissionButton() {
  const { handleLocationPermission } = useLocationPermission()

  return (
    <div className="relative">
      <Button
        onClick={handleLocationPermission}
        className="absolute bottom-8 right-0 h-20 rounded-3xl"
      >
        <Image src={Gps} alt="gps" width={40} />
      </Button>
    </div>
  )
}
