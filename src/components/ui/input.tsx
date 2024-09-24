import { useState } from 'react'

export default function Input({
  value,
  icon,
  onChange,
  onClick,
  index,
}: {
  value: string
  icon?: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
  index: number
}) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className="relative flex items-center">
      <input
        className={`flex w-full flex-col rounded py-3 pl-7 text-3xl outline-none ${isFocused ? 'text-primary-400' : 'text-black'} bg-white placeholder-black`}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={index === 0 ? '출발지 입력' : '도착지 입력'}
      />
      {icon && <span className="absolute right-3 mr-3 mt-2">{icon}</span>}
    </div>
  )
}
