import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronDown } from "lucide-react";
import { Lesson } from "./lesson";
import { useStore } from "../zustand-store";
// import { play } from "../redux-store/slices/player";
// import { useAppDispatch, useAppSelector } from "../redux-store";

export interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex ,title, amountOfLessons }: ModuleProps) {
  // *** Using Redux ***
  // const dispatch = useAppDispatch()

  // const { currentLessonIndex, currentModuleIndex } = useAppSelector(state => {
  //   const { currentModuleIndex, currentLessonIndex } = state.player
  //   return { currentLessonIndex, currentModuleIndex }
  // })

  // const lessons = useAppSelector(state => state.player.course?.modules[moduleIndex].lessons)
  
  // *** Using Zustand ***
  const { currentLessonIndex, currentModuleIndex, lessons, play } = useStore(state => {
    return {
      currentLessonIndex: state.currentLessonIndex,
      currentModuleIndex: state.currentModuleIndex,
      lessons: state.course?.modules[moduleIndex].lessons,
      play: state.play
    }
  })

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex size-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} lessons</span>
        </div>

        <ChevronDown className="size-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons && lessons.map((lesson, lessonIndex) => {
            const isCurrent = currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex

            return (
              <Lesson 
                key={lesson.id} 
                title={lesson.title} 
                duration={lesson.duration} 
                isCurrent={isCurrent}
                onPlay={() => play([moduleIndex, lessonIndex])}
                // onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
              /> 
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )  
}