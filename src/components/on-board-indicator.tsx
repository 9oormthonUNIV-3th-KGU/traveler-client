import { cn } from '~/utils/cn'

function OnBoardIndicator({ step }: { step: number }) {
  return (
    <div className="flex gap-2 px-3 py-2 *:rounded-full *:transition-all">
      <div
        className={cn(
          step === 0
            ? 'h-2.5 w-[30px] bg-primary-500'
            : 'size-2.5 bg-primary-500/30',
        )}
      />
      <div
        className={cn(
          step === 1
            ? 'h-2.5 w-[30px] bg-primary-500'
            : 'size-2.5 bg-primary-500/30',
        )}
      />
      <div
        className={cn(
          step === 2
            ? 'h-2.5 w-[30px] bg-primary-500'
            : 'size-2.5 bg-primary-500/30',
        )}
      />
      <div
        className={cn(
          step === 3
            ? 'h-2.5 w-[30px] bg-primary-500'
            : 'size-2.5 bg-primary-500/30',
        )}
      />
      <div
        className={cn(
          step === 4
            ? 'h-2.5 w-[30px] bg-primary-500'
            : 'size-2.5 bg-primary-500/30',
        )}
      />
    </div>
  )
}

export { OnBoardIndicator }
