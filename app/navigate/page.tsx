import { TMap } from '~/components/t-map'
import { NavigateHeader } from '~/components/navigate-header'

export default function Navigate({
  searchParams,
}: {
  searchParams: {
    from: string
    to: string
  }
}) {
  return (
    <div className="relative min-h-dvh">
      <NavigateHeader
        from={searchParams.from}
        to={searchParams.to}
        time={12}
        distance={794}
      />
      <TMap />
    </div>
  )
}
