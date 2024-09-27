"use client";
import Image from "next/image";
import { useState } from "react";

interface PostImageInterface {
  src: string,
  alt: string,
  w: number,
  h: number
}

export default function PostImage({ src, alt, w, h }: PostImageInterface) {
  // used for images in the project posts

  // x display image
  // clickable for fullscreen viewing
  // x show alt text below image

  const [fullscreen, setFullscreen] = useState(false);

  function handleZoomedClick(e) {
    if (e.target !== e.currentTarget) return;
    setFullscreen(false);
  }

  return (
    <div className="rounded-lg flex flex-col overflow-clip mx-0 md:mx-12 lg:mx-36 my-4 bg-zinc-900">
      {fullscreen ? 
        <div className="z-20 fixed h-dvh w-full flex justify-center items-center top-0 left-0 bg-violet-950 bg-opacity-50">
          <div onClick={handleZoomedClick} className="cursor-zoom-out h-full w-full flex justify-center items-center">
            <div onClick={handleZoomedClick} className="h-5/6 flex flex-col justify-center items-center mx-8">
              <Image className="cursor-default drop-shadow-[0_0_2rem_rgba(0,0,0,1)] max-h-full w-auto" src={src} alt={alt} width={w} height={h} />
              <span className="cursor-default font-light px-6 py-3 bg-black w-full overflow-clip">{`> ${alt}`}</span>
            </div>
          </div>
        </div> 
        : null}
      <Image onClick={() => setFullscreen(true)} className="cursor-zoom-in" src={src} alt={alt} width={w} height={h} />
      <span className="text-sm font-light italic px-4 py-2 opacity-60">{`> ${alt}`}</span>
    </div>
  );
}