import { useState, useEffect } from 'react'

interface CarouselProps {
  onClick: (index: number) => void
}

const Carousel: React.FC<CarouselProps> = ({ onClick }) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((pre) => (pre + 1) % 4)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const handleClick = (index: number) => {
    setActive(index)
    onClick(index)
  }

  return (
    <svg
      className="absolute left-1/2 -mt-[205px] block h-32 w-40 -translate-x-1/2 transform"
      viewBox="-20 0 60 40"
    >
      <rect
        x={active === 0 ? '-7' : active === 1 ? '-7' : '0'}
        y="0"
        width={active === 0 ? '12' : '4'}
        height="4"
        rx="2.5"
        ry="2.5"
        className={active === 0 ? 'fill-primary-500' : 'fill-primary-200'}
        onClick={() => handleClick(0)}
        style={{ cursor: 'pointer' }}
      />
      <rect
        x={active === 1 ? '0' : active === 2 ? '-7' : '7'}
        y="0"
        width={active === 1 ? '12' : '4'}
        height="4"
        rx="2.5"
        ry="2.5"
        className={active === 1 ? 'fill-primary-500' : 'fill-primary-200'}
        onClick={() => handleClick(1)}
        style={{ cursor: 'pointer' }}
      />
      <rect
        x={active === 2 ? '7' : active === 3 ? '-7' : '14'}
        y="0"
        width={active === 2 ? '12' : '4'}
        height="4"
        rx="2.5"
        ry="2.5"
        className={active === 2 ? 'fill-primary-500' : 'fill-primary-200'}
        onClick={() => handleClick(2)}
        style={{ cursor: 'pointer' }}
      />
      <rect
        x={active === 3 ? '14' : '21'}
        y="0"
        width={active === 3 ? '12' : '4'}
        height="4"
        rx="2.5"
        ry="2.5"
        className={active === 3 ? 'fill-primary-500' : 'fill-primary-200'}
        onClick={() => handleClick(3)}
        style={{ cursor: 'pointer' }}
      />
    </svg>
  )
}

export default Carousel
