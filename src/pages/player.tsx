import { MessageCircle } from "lucide-react";
import { Header } from "../components/header";
import { Video } from "../components/video";
import { Module } from "../components/module";

export function Player(){
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
            <Video url="https://www.youtube.com/watch?v=Jai8w6K_GnY" />
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Module moduleIndex={0} title="Redux Fundamentals" amountOfLessons={3}  />
            <Module moduleIndex={1} title="Redux Fundamentals" amountOfLessons={3}  />          
            <Module moduleIndex={3} title="Redux Fundamentals" amountOfLessons={3}  />          
          </aside>
        </main>
      </div>
    </div>
  )
}