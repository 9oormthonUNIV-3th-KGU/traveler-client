import type { Metadata } from 'next'
import localFont from 'next/font/local'

import '~/styles/globals.css'
import { cn } from '~/utils/cn'

const pretendard = localFont({
  src: './fonts/pretendard-variable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: '산책',
  description: '',
  openGraph: {
    images: '/og.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src={`https://apis.openapi.sk.com/tmap/vectorjs?version=1&appKey=${process.env.NEXT_PUBLIC_TMAP_APP_KEY}`}
        />
      </head>
      <body className={cn(pretendard.variable, 'font-sans antialiased')}>
        <div
          className="mx-auto min-h-dvh max-w-screen-sm bg-gradient-to-b from-white to-gray-100 text-gray-950"
          vaul-drawer-wrapper=""
        >
          {children}
        </div>
      </body>
    </html>
  )
}
