'use client'
import EmptyChatPlaceHolder from "@/app/ui/chat/emptyChatPlaceholder";
import { useRef, useState } from "react";

export default function Container() {
  const [chatPicked, setChatPicked] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  function autosizeTextArea() {
    if (inputRef.current) {
      if (inputRef.current.scrollHeight < 150) {
        inputRef.current.style.height = '0px'
        const inputHeight = inputRef.current.scrollHeight
        inputRef.current.style.height = inputHeight + 'px'
      }
    }
  }

  return (
    <div className='hidden bg-sky-950 sm:block sm:w-full'>
      <EmptyChatPlaceHolder isPicked={chatPicked} text="Select chat to start messaging" />
      <div className="w-full h-full flex flex-col-reverse items-end">
        <div className="bg-slate-700 w-full min-h-20 max-h-50">
          <textarea rows={1} onChange={autosizeTextArea} ref={inputRef} className="text-black w-full" placeholder="Message..." />
        </div>
        <div className="bg-red-700 w-full h-20">Message block</div>

      </div>
    </div>
  )
}
