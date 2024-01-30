import '@/app/ui/css/speechCloud.css'

export enum MessageSide {
  OUTCOME = 0,
  INCOME = 1,
}

export default function ChatMessage({ message, side }: { message: string, side: MessageSide }) {
  return (
    <div className={`bubble ${(side) ? 'right' : 'left'} w-full mb-2`}>{message}</div>
  )
}
