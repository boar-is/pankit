export default function TailwindIndicator() {
  return (
    <div className="flex aspect-square h-10 items-center justify-center rounded-full border bg-muted font-mono font-semibold text-muted-foreground">
      <div className="block xs:hidden">xxs:</div>
      <div className="hidden xs:block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        xs:
      </div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm:
      </div>
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md:</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg:</div>
      <div className="hidden xl:block 2xl:hidden">xl:</div>
      <div className="hidden 2xl:block">2xl:</div>
    </div>
  )
}
