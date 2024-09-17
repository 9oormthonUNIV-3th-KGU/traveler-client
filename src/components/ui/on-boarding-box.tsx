function OnBoardingBox({ title, message }: { title: string; message: string }) {
  return (
    <div className="mt-20 flex h-screen items-center justify-center">
      <div className="relative z-10 h-1/4 w-5/6 rounded-2xl p-10 text-center shadow-xl">
        <span className="mb-7 block text-3xl">{title}</span>
        <span className="text-xl">{message}</span>
      </div>
    </div>
  )
}
export default OnBoardingBox
