import { SiteHeader } from '~/components/site-header'

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col justify-center px-5">
      <SiteHeader />
      <div className="flex flex-1 flex-col items-center space-y-8 pb-[76px] pt-6"></div>
    </div>
  )
}
