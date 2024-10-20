import { Button } from '~/components/ui/button'

function PlaceInput() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col divide-y-2 divide-dashed divide-gray-200 rounded bg-white p-5 shadow">
        <div className="pb-5">
          <button
            type="button"
            className="w-full text-start text-2xl font-bold text-primary-500"
          >
            출발지 입력
          </button>
        </div>
        <div className="pt-5">
          <button
            type="button"
            className="w-full text-start text-2xl font-medium text-gray-950"
          >
            도착지 입력
          </button>
        </div>
      </div>
      <Button size="lg" disabled={true}>
        길 찾기
      </Button>
    </div>
  )
}

export { PlaceInput }
