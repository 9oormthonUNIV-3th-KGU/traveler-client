import { Card } from '~/components/ui/card'
import Input from '~/components/ui/input'
import Image from 'next/image'
import { Button } from '~/components/ui/button'
import Gps from '~/assets/images/gps-green.png'

interface LocationInputProps {
  inputs: string[]
  onChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function LocationInput({
  inputs,
  onChange,
}: LocationInputProps) {
  const gpsIcon = <Image src={Gps} alt="gps" />

  return (
    <>
      <div className="flex items-center justify-center">
        <span className="text-center text-3xl text-gray-600">
          어디를 산책할까요?
        </span>
      </div>
      <Card className="mt-5">
        {inputs.map((place, index) => (
          <div key={index}>
            <Input
              value={place}
              icon={gpsIcon}
              onChange={(e) => onChange(index, e)}
            />
            {index !== inputs.length - 1 && (
              <hr className="my-4 border-dashed border-gray-400" />
            )}
          </div>
        ))}
      </Card>
      <Button className="mt-10 h-24 w-full text-3xl">길 찾기</Button>
    </>
  )
}
