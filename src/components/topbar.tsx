import Image from 'next/image'
import userIcon from '~/assets/images/user.png'

export default function Topbar() {
  return (
    <div className="relative mb-5 flex h-20 w-full flex-row p-5">
      <span className="text-5xl text-primary-400">산책</span>
      <Image
        className="absolute right-5 top-6"
        src={userIcon}
        alt="user"
        width={40}
      />
    </div>
  )
}
