import Image from 'next/image'

import { Card } from '~/components/ui/card'
import TrophyIcon from '~/assets/trophy.svg'
import GoldIcon from '~/assets/gold.svg'
import SilverIcon from '~/assets/silver.svg'
import BronzeIcon from '~/assets/bronze.svg'

export default function PopularLocationRank() {
  return (
    <Card className="z-10 mx-4">
      <ul>
        <li className="m-5 mb-12 flex flex-row justify-between">
          <Image src={GoldIcon} alt="gold" width={50} />
          <Image src={TrophyIcon} alt="trophy" width={40} />
        </li>
        <li className="m-5 mb-12">
          <Image src={SilverIcon} alt="silver" width={50} />
        </li>
        <li className="m-5">
          <Image src={BronzeIcon} alt="bronze" width={50} />
        </li>
      </ul>
    </Card>
  )
}
