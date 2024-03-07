// import { useAppSelector } from "../redux-store"
// import { useCurrentLesson } from "../redux-store/slices/player"
import { useCurrentLessonZustand, useStore } from "../zustand-store"

export function Header() {
  // *** Using Redux ***
  //const { currentModule, currentLesson } = useCurrentLesson()
  // const isLoading = useAppSelector(state => state.player.isLoading)
  
  // *** Using Zustand ***
  const { currentLesson, currentModule } = useCurrentLessonZustand()
  const isLoading = useStore(state => state.isLoading)

  if (isLoading) {
    return <h1 className="text-2xl text-zinc-50 font-bold animate-pulse">Carregando...</h1>
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">Module: {currentModule?.title}</span>
    </div>
  )  
}