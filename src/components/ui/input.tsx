import { useState } from 'react'

export default function Input({
  value,
  icon,
  onChange,
}: {
  value: string
  icon?: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
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
        className={`flex w-full flex-col rounded py-3 pl-7 text-3xl outline-none ${isFocused ? 'text-primary-400' : 'text-black'} bg-white`}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {icon && <span className="absolute right-3 mr-3 mt-2">{icon}</span>}
    </div>
  )
}
