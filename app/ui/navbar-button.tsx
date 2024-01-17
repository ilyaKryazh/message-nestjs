export default function NavbarButton({ switchToogle, toogle }: { switchToogle: () => void, toogle: boolean }) {
  //TODO: Toogle navbar section with menu
  return (
    <div>
      <button className="bg-none hover:bg-gray-200 hover:rounded-full cursor-pointer  p-[10px] flex flex-col items-center">
        <div className="w-[22px] h-[3px] bg-gray-900 mt-[0px]"></div>
        <div className="w-[22px] h-[3px] bg-gray-900 mt-[5px]"></div>
        <div className="w-[22px] h-[3px] bg-gray-900 mt-[5px]"></div>
      </button>
    </div>
  )
}
