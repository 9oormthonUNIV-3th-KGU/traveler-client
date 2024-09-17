'use client'

import OnBoardingBox from '~/components/ui/on-boarding-box'
import { useState, useEffect } from 'react'
import { Button } from '~/components/ui/button'

function OnBoardingPage() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((pre) => (pre + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  })

  return (
    <div className="relative">
      <img src="/og.png" className="absolute" />
      <OnBoardingBox
        title="환영해요!"
        message="산책은 목적지까지 경로 안내, 내 주변의 인기있는 장소를 확인할 수 있어요"
      />
      <svg
        className="absolute left-1/2 -mt-64 block h-32 w-44 -translate-x-1/2 transform"
        viewBox="-17 0 60 40"
      >
        <rect
          x={active === 0 ? '-10' : '0' && active === 1 ? '-10' : '0'}
          y="0"
          width={active === 0 ? '15' : '5'} // 선택된 요소는 길어짐
          height="5"
          rx="2.5"
          ry="2.5" // 둥근 모서리
          fill={active === 0 ? 'green' : 'grey'}
        />
        <rect
          x={active === 1 ? '0' : '10' && active === 2 ? '-10' : '10'}
          y="0"
          width={active === 1 ? '15' : '5'}
          height="5"
          rx="2.5"
          ry="2.5" // 둥근 모서리
          fill={active === 1 ? 'green' : 'grey'}
        />
        <rect
          x={active === 2 ? '10' : '20' && active === 3 ? '-10' : '20'}
          y="0"
          width={active === 2 ? '15' : '5'}
          height="5"
          rx="2.5"
          ry="2.5" // 둥근 모서리
          fill={active === 2 ? 'green' : 'grey'}
        />
        <rect
          x={active === 3 ? '20' : '30'}
          y="0"
          width={active === 3 ? '15' : '5'}
          height="5"
          rx="2.5"
          ry="2.5" // 둥근 모서리
          fill={active === 3 ? 'green' : 'grey'}
        />
      </svg>
      <Button
        variant="secondary"
        size="lg"
        className="absolute left-1/2 -mt-44 h-24 w-full -translate-x-1/2 transform"
      >
        카카오톡으로 로그인하기
      </Button>
    </div>
  )
}

export default OnBoardingPage
