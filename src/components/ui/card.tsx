import { cn } from '~/utils/cn'

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-3 rounded bg-white px-6 py-5 shadow',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn('text-[22px] font-semibold', className)} {...props} />
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
