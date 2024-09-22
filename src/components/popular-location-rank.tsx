import { Card } from './ui/card'
import Image from 'next/image'
import TrophyIcon from '~/assets/images/Trophy.png'
import GoldIcon from '~/assets/images/Gold.png'
import SilverIcon from '~/assets/images/Silver.png'
import BronzeIcon from '~/assets/images/Bronze.png'

export default function PopularLocationRank() {
  return (
    <>
      <div className="flex items-center justify-center">
        <span className="mb-5 mt-12 text-center text-4xl text-gray-900">
          내 주변 인기있는 장소
        </span>
      </div>
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
      <div className="mb-10 mt-3 text-center text-2xl text-gray-700">
        먼저 오른쪽 하단 버튼을 눌러 위치정보를 허용해주세요!
      </div>
    </>
  )
}
