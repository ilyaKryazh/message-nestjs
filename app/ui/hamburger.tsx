export default function Hamburger({ toogleButton }: { toogleButton: () => void }) {

  return (
    <div>
      <button onClick={toogleButton} className="bg-none hover:bg-gray-200 hover:rounded-full cursor-pointer  p-[10px] flex flex-col items-center">
        <div className="w-[22px] h-[3px] bg-gray-900 mt-[0px]"></div>
        <div className="w-[22px] h-[3px] bg-gray-900 mt-[5px]"></div>
        <div className="w-[22px] h-[3px] bg-gray-900 mt-[5px]"></div>
      </button>
    </div>
  )
}
