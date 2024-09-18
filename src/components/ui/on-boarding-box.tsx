function OnBoardingBox({
  title,
  message,
}: {
  title: string
  message: React.ReactNode
}) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative z-10 mt-[130px] h-[145px] w-[335px] rounded-2xl p-[25px] text-center shadow-all-sides">
        <span className="mb-4 block text-2xl">{title}</span>
        <span className="text-base">{message}</span>
      </div>
    </div>
  )
}
export default OnBoardingBox
