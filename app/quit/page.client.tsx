'use client'

import { useState } from 'react'
import type { CheckedState } from '@radix-ui/react-checkbox'

import { Button } from '~/components/ui/button'
import { QuitButton } from '~/components/quit-button'
import { Checkbox } from '~/components/ui/checkbox'

function Step1({ onClickNext }: { onClickNext: () => void }) {
  const [checked, setChecked] = useState<CheckedState>(false)

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
        <label htmlFor="confirm" className="flex items-center gap-2">
          <Checkbox
            id="confirm"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <span className="font-medium text-gray-950">
            탈퇴 시 유의사항을 모두 확인했어요.
          </span>
        </label>
        <Button size="lg" disabled={!checked} onClick={onClickNext}>
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

  const [reasons, setReasons] = useState(
    () => new Set<(typeof SURVEY_ITEMS)[number]>(),
  )

  const handleCheckedChange = (
    checked: CheckedState,
    item: (typeof SURVEY_ITEMS)[number],
  ) => {
    setReasons((prev) => {
      const next = new Set(prev)
      if (checked) next.add(item)
      else next.delete(item)
      return next
    })

    console.log(reasons)
  }

  return (
    <>
      <h1 className="text-center text-2xl font-semibold">
        탈퇴 이유를 알려주세요
      </h1>
      <div className="flex w-full flex-1 flex-col gap-3.5">
        {SURVEY_ITEMS.map((item) => (
          <label key={item} htmlFor={item} className="flex items-center gap-2">
            <Checkbox
              id={item}
              onCheckedChange={(checked) => handleCheckedChange(checked, item)}
            />
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

export default function QuitFunnel() {
  const [step, setStep] = useState(1)

  const renderFunnel = () => {
    switch (step) {
      case 1:
        return <Step1 onClickNext={() => setStep(2)} />
      case 2:
        return <Step2 />
    }
  }

  return renderFunnel()
}
