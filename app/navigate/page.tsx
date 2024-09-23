import { TMap } from '~/components/t-map'

export default function Navigate({
  searchParams,
}: {
  searchParams: {
    start: string
    end: string
  }
}) {
  return (
    <div className="relative min-h-dvh">
      {searchParams.start}
      {searchParams.end}
      <TMap />
    </div>
  )
}
