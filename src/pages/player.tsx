import { MessageCircle } from "lucide-react";
import { Header } from "../components/header";
import { Video } from "../components/video";
import { Module } from "../components/module";
import { useEffect } from "react";
import { SkeletonScreen } from "../components/skeleton-screen";
import { useCurrentLessonZustand, useStore } from "../zustand-store";

// import { useAppDispatch, useAppSelector } from "../redux-store";
// import { loadCourse, useCurrentLesson } from "../redux-store/slices/player";

export function Player(){
  // *** Using Redux *** 
  // const dispatch = useAppDispatch()
  // const isLoading = useAppSelector(state => state.player.isLoading)
  // const modules = useAppSelector(state => state.player.course?.modules)

  // const { currentLesson } = useCurrentLesson()

  // useEffect(() => {
  //   dispatch(loadCourse())
  // }, [])

  const { currentLesson } = useCurrentLessonZustand() 

  useEffect(() => {
    if (currentLesson) {
      document.title = `Watching ${currentLesson.title}`
    }
  }, [currentLesson])

  // *** Using Zustand ***
  const { isLoading, course, load } = useStore(state => {
    return {
      isLoading: state.isLoading,
      course: state.course,
      load: state.load
    }
  })

  const modules = course?.modules

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[68.75rem] flex-col gap-6">
        <div className="flex justify-between items-center">
          <Header />

          <button className="flex items-center gap-2 rounded bg-emerald-500 px-3 py-2 text-sm font-medium hover:bg-emerald-600">
            <MessageCircle className="size-4" />
            Drop feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {isLoading ? (
              <SkeletonScreen />
            ) : (
              modules && modules.map((module, index) => (
                <Module 
                  key={module.id}
                  moduleIndex={index} 
                  title={module.title} 
                  amountOfLessons={module.lessons.length}  
                />
              ))
            )}
            
            
          </aside>
        </main>
      </div>
    </div>
  )
}