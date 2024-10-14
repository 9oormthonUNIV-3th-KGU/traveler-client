import * as React from 'react'
import { cva, type VariantProps } from 'cva'

import { cn } from '~/utils/cn'

const buttonVariants = cva({
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded font-semibold transition-colors disabled:bg-gray-300 disabled:text-white',
  variants: {
    variant: {
      default: 'bg-primary-500 text-white hover:bg-primary-600',
      secondary: 'bg-primary-200 text-primary-500 hover:bg-primary-300',
      destructive:
        'border border-red-300 bg-white text-red-300 hover:bg-red-100',
    },
    size: {
      default: 'h-[58px] px-5 py-[15px] text-xl',
      xs: 'h-[33px] px-2.5 py-2 text-xs',
      sm: 'h-[46px] px-4 py-3 text-base',
      lg: 'h-[70px] px-6 py-[18px] text-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
