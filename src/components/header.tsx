export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Redux Fundamentals</h1>
      <span className="text-sm text-zinc-400">Module "Discovering Redux"</span>
    </div>
  )  
}