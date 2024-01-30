'use client'
import ChatMessage, { MessageSide } from "@/app/ui/chat/chatMessage";
import EmptyChatPlaceHolder from "@/app/ui/chat/emptyChatPlaceholder";
import ImageButton from "@/app/ui/imageButton";
import { useRef, useState } from "react";

export default function Container() {
  const [chatPicked, setChatPicked] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  function autosizeTextArea() {
    if (inputRef.current) {
      if (inputRef.current.scrollHeight < 150) {
        inputRef.current.style.height = '0px'
        const inputHeight = inputRef.current.scrollHeight
        //inputRef.current.rows = 2
        inputRef.current.style.height = inputHeight + 'px'
      }
    }
  }

  return (
    <div className='hidden bg-sky-950 sm:block sm:w-full'>
      <EmptyChatPlaceHolder isPicked={chatPicked} text="Select chat to start messaging" />
      <div className="w-full h-full flex flex-col-reverse items-end">
        <div className="bg-slate-700 min-h-20 max-h-50 w-full grid grid-cols-6 content-center justify-stretch">
          <textarea rows={2} onChange={autosizeTextArea} ref={inputRef} className="m-1 p-1 col-span-5 resize-none border-none outline-none overflow-auto text-inherit w-full bg-inherit" placeholder="Message..." />
          <ImageButton url={'/telegram.png'} width={40} height={40} />
        </div>
        <div className="w-full h-full flex flex-col-reverse overflow-auto">
          <ChatMessage message={'Test Message 1'} side={MessageSide.INCOME} />
          <ChatMessage message={'Test Message 2'} side={MessageSide.OUTCOME} />
        </div>

      </div>
    </div>
  )
}
