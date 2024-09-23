'use client'

import Image from 'next/image'
import { Button } from '~/components/ui/button'
import Gps from '~/assets/gps-white.svg'

interface LocationPermissionButtonProps {
  onClick: () => void
}

export default function LocationPermissionButton({
  onClick,
}: LocationPermissionButtonProps) {
  return (
    <div className="relative">
      <Button
        onClick={onClick}
        className="absolute bottom-8 right-0 h-20 rounded-3xl"
      >
        <Image src={Gps} alt="gps" width={40} />
      </Button>
    </div>
  )
}
