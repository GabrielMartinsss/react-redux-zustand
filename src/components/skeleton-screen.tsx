export function SkeletonScreen() {
  return (
    <div className="bg-zinc-800 p-4 flex flex-col space-y-6">
      <div className="animate-pulse flex items-center gap-3">
        <div className="flex size-10 rounded-full items-center justify-center bg-zinc-700 text-xs" />

        
        <div className="flex flex-1 flex-col gap-1 text-left">
          <div className="w-[60%] h-3 rounded-full bg-zinc-700" />
          <div className="w-[60%] h-3 rounded-full bg-zinc-700" />
        </div>

        <div className="size-4 rounded-full bg-zinc-700" />
      </div>
      <div className="space-y-3 animate-pulse">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="size-4 rounded-full bg-zinc-700" />
            <div className="w-[60%] h-3 rounded-full bg-zinc-700" />
            <div className="w-6 h-3 rounded-full bg-zinc-700 ml-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}