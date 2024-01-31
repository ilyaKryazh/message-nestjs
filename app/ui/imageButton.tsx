'use client'
import Image from "next/image";
import { useRef } from "react";

import '@/app/ui/css/buttonAnimation.css'

export default function ImageButton({ url, width, height }: { url: string, width: number, height: number }) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  function animate() {
    buttonRef.current?.classList.add('clicked')
    setTimeout(() => buttonRef.current?.classList.remove('clicked'), 300)
  }

  return (
    <div className="flex justify-center">
      <button ref={buttonRef} onClick={animate} className="button flex items-center justify-center p-2 rounded w-fit click:animate-ping" >
        <Image src={url} alt="image" width={width} height={height} />
      </button>
    </div>
  )
}
