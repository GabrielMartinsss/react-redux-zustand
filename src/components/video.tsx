import ReactPlayer from "react-player";

export interface VideoProps {
  url: string
}

export function Video({ url }: VideoProps) {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer 
        width="100%"
        height="100%"
        controls
        url={url}
      />
    </div>
  )  
}