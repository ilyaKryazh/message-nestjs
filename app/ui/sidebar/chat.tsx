import Image from "next/image";

export default function Chat() {

  return (
    <div className="hover:bg-gray-200 p-1 flex flex-row">
      <div>
        <Image src="" alt="logo" className="bg-gray-100 w-12 h-12  rounded-full" />
      </div>
      <div className="ml-1 flex flex-row justify-between w-full">
        <div className="flex flex-col w-[50%] text-black">
          <p className="font-medium">Chat name</p>
          <p className="text-gray-500">Last message</p>
        </div>
        <div className="flex flex-col text-center text-black items-center">
          <p className="text-gray-500">12:34 PM</p>
          <div className="bg-gray-400 font-medium text-white pl-2 pr-2 rounded-3xl w-fit">123</div>
        </div>
      </div>
    </div>
  )
}
