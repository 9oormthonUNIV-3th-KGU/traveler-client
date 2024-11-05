import { SiteHeader } from '~/components/site-header'

import QuitFunnel from './page.client'

export default function Quit() {
  return (
    <div className="flex min-h-dvh flex-col justify-center px-5">
      <SiteHeader />
      <div className="flex w-full flex-1 flex-col items-center space-y-8 py-8">
        <QuitFunnel />
      </div>
    </div>
  )
}
