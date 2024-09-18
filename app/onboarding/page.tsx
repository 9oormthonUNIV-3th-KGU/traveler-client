'use client'

import OnBoardingBox from '~/components/ui/on-boarding-box'
import { Button } from '~/components/ui/button'
import Carousel from '../../public/carousel'
import { useState, useEffect } from 'react'

const datas = [
  {
    title: '환영해요!',
    message:
      '산책은 목적지까지 경로 안내, 내 주변의 인기있는 장소를 확인할 수 있어요',
  },
  {
    title: '목적지까지 경로 안내',
    message:
      '목적지가 있다면 장소 입력 후 경로를 선택해서 길찾기를 시작해 주세요',
  },
  {
    title: '가볼만한 곳 찾기',
    message: `산책 중 새로운 곳에 방문해보면 어떨까요? <br />
    내 주변 인기 있는 장소를 확인해보세요!`,
  },
  {
    title: '간편 로그인 후 산책 시작',
    message: '카카오톡 계정으로 <br /> 빠른 로그인을 도와드릴게요!',
  },
]

function OnBoardingPage() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((pre) => (pre + 1) % datas.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const handleActive = (index: number) => {
    setActive(index)
  }

  return (
    <div className="relative">
      <div className="ml-[120px]">
        <img
          src="/text-icon.png"
          className="absolute ml-[90px] mt-[70px] w-[30%] bg-transparent"
        />
        <img
          src="/walking-icon.png"
          className="absolute mt-[110px] w-[60%] bg-transparent"
        />
      </div>
      {datas.map(
        (data, index) =>
          active === index && (
            <OnBoardingBox
              key={index}
              title={data.title}
              message={
                <span dangerouslySetInnerHTML={{ __html: data.message }} />
              }
            />
          ),
      )}
      <Carousel onClick={handleActive} />
      <Button
        variant="secondary"
        size="lg"
        className="h-15 absolute left-1/2 -mt-[150px] w-[335px] -translate-x-1/2 transform"
      >
        카카오톡으로 로그인하기
      </Button>
    </div>
  )
}

export default OnBoardingPage
