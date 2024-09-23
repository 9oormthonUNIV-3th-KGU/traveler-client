import { NavigateCard } from '~/components/navigate-card'

export default function Navigate() {
  return (
    <div className="relative min-h-dvh px-5">
      <div className="grid w-full grid-cols-2 justify-items-center gap-5 sm:grid-cols-3">
        <NavigateCard index={1} type={11} distance={115} description="직진" />
        <NavigateCard index={2} type={12} distance={115} description="좌회전" />
        <NavigateCard index={3} type={13} distance={115} description="우회전" />
        <NavigateCard index={4} type={14} distance={115} description="U-Turn" />
        <NavigateCard
          index={5}
          type={16}
          distance={115}
          description="8시 방향 좌회전"
        />
        <NavigateCard
          index={6}
          type={17}
          distance={115}
          description="10시 방향 좌회전"
        />
        <NavigateCard
          index={7}
          type={18}
          distance={115}
          description="2시 방향 우회전"
        />
        <NavigateCard
          index={8}
          type={19}
          distance={115}
          description="4시 방향 우회전"
        />
        <NavigateCard index={9} type={125} distance={115} description="육교" />
        <NavigateCard
          index={10}
          type={126}
          distance={115}
          description="지하보도"
        />
        <NavigateCard
          index={11}
          type={127}
          distance={115}
          description="계단 진입"
        />
        <NavigateCard
          index={12}
          type={128}
          distance={115}
          description="경사로 진입"
        />
        <NavigateCard
          index={13}
          type={129}
          distance={115}
          description="계단 + 경사로 진입"
        />
        <NavigateCard
          index={14}
          type={211}
          distance={115}
          description="횡단보도"
        />
        <NavigateCard
          index={15}
          type={212}
          distance={115}
          description="좌측 횡단보도"
        />
        <NavigateCard
          index={16}
          type={213}
          distance={115}
          description="우측 횡단보도"
        />
        <NavigateCard
          index={17}
          type={214}
          distance={115}
          description="8시 방향 횡단보도"
        />
        <NavigateCard
          index={18}
          type={215}
          distance={115}
          description="10시 방향 횡단보도"
        />
        <NavigateCard
          index={19}
          type={216}
          distance={115}
          description="2시 방향 횡단보도"
        />
        <NavigateCard
          index={20}
          type={217}
          distance={115}
          description="4시 방향 횡단보도"
        />
        <NavigateCard
          index={21}
          type={218}
          distance={115}
          description="엘리베이터"
        />
      </div>
    </div>
  )
}
