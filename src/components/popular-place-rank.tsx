import Image from 'next/image'

import GoldMedalIcon from '~/assets/gold.svg'
import SilverMedalIcon from '~/assets/silver.svg'
import BronzeMedalIcon from '~/assets/bronze.svg'
import TrophyIcon from '~/assets/trophy.svg'

function PopularPlaceRank() {
  return (
    <>
      <ol className="w-full overflow-hidden rounded bg-white shadow">
        <li className="relative flex cursor-pointer items-center justify-center px-5 py-4 transition hover:bg-primary-500 hover:text-white">
          <Image
            src={GoldMedalIcon}
            alt="1등"
            className="absolute left-5 size-9"
          />
          <span className="line-clamp-1 w-[calc(100vw-152px)] text-xl font-semibold">
            남영동양문 역삼점
          </span>
          <Image
            src={TrophyIcon}
            alt="1등"
            className="absolute right-5 size-9"
          />
        </li>
        <li className="relative flex cursor-pointer items-center justify-center px-5 py-4 transition hover:bg-primary-500 hover:text-white">
          <Image
            src={SilverMedalIcon}
            alt="2등"
            className="absolute left-5 size-9"
          />
          <span className="line-clamp-1 w-[calc(100vw-152px)] text-xl font-semibold">
            바게트케이
          </span>
        </li>
        <li className="relative flex cursor-pointer items-center justify-center px-5 py-4 transition hover:bg-primary-500 hover:text-white">
          <Image
            src={BronzeMedalIcon}
            alt="3등"
            className="absolute left-5 size-9"
          />
          <span className="line-clamp-1 w-[calc(100vw-152px)] text-xl font-semibold">
            유미식당 본점
          </span>
        </li>
      </ol>
    </>
  )
}

export { PopularPlaceRank }
