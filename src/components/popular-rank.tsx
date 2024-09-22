import { Card } from './ui/card'
import Image from 'next/image'
import TrophyIcon from '~/assets/images/Trophy.png'
import GoldIcon from '~/assets/images/Gold.png'
import SilverIcon from '~/assets/images/Silver.png'
import BronzeIcon from '~/assets/images/Bronze.png'

export default function PopularRank() {
  return (
    <Card>
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
