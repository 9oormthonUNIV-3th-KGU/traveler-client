'use client'

import { SiteHeader } from '~/components/site-header'
import { Button } from '~/components/ui/button'
import { useState } from 'react'
import { QuitButton } from '~/components/quit-button'

function Step1({ onClickNext }: { onClickNext: () => void }) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <h1 className="text-center text-2xl font-semibold">
        탈퇴 전, 꼭 확인해주세요
      </h1>
      <div className="flex w-full flex-1 flex-col gap-3.5">
        <h2 className="font-semibold text-gray-950">검색 기록 유지</h2>
        <p className="font-medium text-gray-800">
          기록을 모두 삭제하고 싶으실 경우, 반드시 탈퇴 이전에 삭제해주세요
        </p>
      </div>
      <div className="flex w-full flex-col gap-8">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(event) => setIsChecked(event.target.checked)}
          />
          <span className="font-medium text-gray-950">
            탈퇴 시 유의사항을 모두 확인했어요.
          </span>
        </label>
        <Button size="lg" disabled={!isChecked} onClick={onClickNext}>
          다음
        </Button>
      </div>
    </>
  )
}

function Step2() {
  const SURVEY_ITEMS = [
    '현 위치 확인이 어려워요',
    '사용법이 복잡해요',
    '회원의 메리트가 없어요',
    '다른 서비스를 사용하고 있어요',
  ] as const

  return (
    <>
      <h1 className="text-center text-2xl font-semibold">
        탈퇴 이유를 알려주세요
      </h1>
      <div className="flex w-full flex-1 flex-col gap-3.5">
        {SURVEY_ITEMS.map((item) => (
          <label key={item} className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="font-medium text-gray-950">{item}</span>
          </label>
        ))}
      </div>
      <div className="flex w-full flex-col gap-8">
        <QuitButton />
      </div>
    </>
  )
}

export default function Quit() {
  const [step, setStep] = useState(1)

  const renderFunnel = () => {
    switch (step) {
      case 1:
        return <Step1 onClickNext={() => setStep(2)} />
      case 2:
        return <Step2 />
    }
  }

  return (
    <div className="flex min-h-dvh flex-col justify-center px-5">
      <SiteHeader />
      <div className="flex w-full flex-1 flex-col items-center space-y-8 py-8">
        {renderFunnel()}
      </div>
    </div>
  )
}
