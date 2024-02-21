const Gradient = () => {
  return (
    <>
      <div className="absolute left-[40%] h-full w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 sm:w-12 md:w-14 lg:w-16 xl:w-20 2xl:w-24">
        <div className="h-full w-full rounded-[50%] bg-ctp-surface0 blur-3xl filter"></div>
      </div>
      <div className="absolute left-[50%] h-full w-10 -translate-x-1/2 -translate-y-1/2 sm:w-12 md:w-14 lg:w-16 xl:w-20 2xl:w-24">
        <div className="h-full w-full rounded-[50%] bg-ctp-surface0 blur-3xl filter"></div>
      </div>
      <div className="absolute left-[60%] h-full w-10 -translate-x-1/2 -translate-y-1/2 -rotate-45 sm:w-12 md:w-14 lg:w-16 xl:w-20 2xl:w-24">
        <div className="h-full w-full rounded-[50%] bg-ctp-surface0 blur-3xl filter"></div>
      </div>
    </>
  )
}

export default Gradient
