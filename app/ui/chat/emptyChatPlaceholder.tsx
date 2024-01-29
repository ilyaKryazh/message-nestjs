export default function EmptyChatPlaceHolder({ text, isPicked }: { text: string, isPicked: boolean }) {
  return (
    <div className={`${!isPicked && 'hidden'} flex justify-center items-center h-[100%]`}>
      <p className="bg-gray-400/30 font-medium text-slate-300 pl-2 pr-2 pt-0.5 pb-0.5 rounded-3xl text-center">{text}</p>
    </div>
  )
}
