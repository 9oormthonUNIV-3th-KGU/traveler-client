import Image from 'next/image'
import userIcon from '~/assets/user.svg'
import Logo from '~/assets/logo.svg'

export default function TopBar() {
  const logoIcon = <Image src={Logo} alt="logo" width={100} />

  return (
    <div className="relative mb-5 flex h-20 w-full flex-row p-5">
      <div className="text-5xl text-primary-400">{logoIcon}</div>
      <Image
        className="absolute right-5 top-6"
        src={userIcon}
        alt="user"
        width={50}
      />
    </div>
  )
}
