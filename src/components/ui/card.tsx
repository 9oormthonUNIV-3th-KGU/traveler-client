import { forwardRef } from 'react'
import { cn } from '~/utils/cn'

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex flex-col rounded bg-white px-6 py-5 shadow',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Card.displayName = 'Card'

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn('text-center text-[22px] font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-center font-medium text-gray-800', className)}
      {...props}
    />
  )
}

export { Card, CardTitle, CardDescription }
