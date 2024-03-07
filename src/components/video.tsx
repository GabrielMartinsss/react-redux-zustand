import { Loader } from "lucide-react";
import ReactPlayer from "react-player";
import { useCurrentLessonZustand, useStore } from "../zustand-store";
// import { next, useCurrentLesson } from "../redux-store/slices/player";
// import { useAppDispatch, useAppSelector } from "../redux-store";

export function Video() {
  // *** Using Redux ***
  // const dispatch = useAppDispatch()
  // const { currentLesson } = useCurrentLesson()
  // const isLoading = useAppSelector(state => state.player.isLoading)

  // function handlePlayNext() {
  //   dispatch(next())
  // }

  // *** Using Zustand ***
  const { currentLesson } = useCurrentLessonZustand()
  const { isLoading, next } = useStore(state => {
    return {
      isLoading: state.isLoading,
      next: state.next
    }
  })

  function handlePlayNext() {
    next()
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="h-full flex items-center justify-center">
          <Loader className="size-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer 
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )  
}