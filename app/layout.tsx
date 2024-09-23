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
    images: [
      {
        url: '/og.png',
        alt: '산책',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={cn(pretendard.variable, 'font-sans antialiased')}>
        <div className="mx-auto min-h-dvh max-w-screen-sm bg-gradient-to-b from-white to-gray-100 text-gray-950">
          {children}
        </div>
      </body>
    </html>
  )
}
