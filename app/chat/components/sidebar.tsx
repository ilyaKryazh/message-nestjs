import Navbar from "@/app/ui/navbar";
import Chat from "@/app/ui/sidebar/chat";

export default function Sidebar() {
  return (
    <div className="bg-white w-full md:basis-1/2 overflow-y-auto">
      <Navbar />
      <div className="divide-gray-200 divide-y">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  )
}
