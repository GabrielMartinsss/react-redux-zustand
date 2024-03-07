import { useAppSelector } from "../redux-store"
import { useCurrentLesson } from "../redux-store/slices/player"

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector(state => state.player.isLoading)

  if (isCourseLoading) {
    return <h1 className="text-2xl text-zinc-50 font-bold animate-pulse">Carregando...</h1>
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">Module: {currentModule?.title}</span>
    </div>
  )  
}