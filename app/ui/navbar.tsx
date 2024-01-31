'use client'

import { useState } from "react"
import Search from "./search"
import Hamburger from "./hamburger"
import '@/app/ui/css/sidebar.css'
import Image from "next/image"

export default function Navbar() {
  const [toogle, setToogle] = useState(false)

  function switchToogle(): void {
    setToogle(!toogle)
  }

  return (
    <div className="flex flex-row gap-3 m-3">
      <Hamburger toogleButton={switchToogle} />
      <Search />

      <div className={`sidebar ${(toogle) ? 'open' : 'close'}`}>
        <div className={`sidebar-menu ${(toogle) ? 'open' : 'close'} z-11 px-10 py-10 h-full bg-white`}>
          <ul className="text-black flex flex-col min-h-[250px]">
            <li className="my-4 font-bold">
              <Image alt='' width={100} height={100} className="bg-gray-900 rounded-full my-2" />
              <p>Account Name </p>
            </li>
            <li className="my-4 uppercase">
              <a href="/portfolio">Settings</a>
            </li>
            <li className="my-4 uppercase">
              <a href="/contact">Log out</a>
            </li>
          </ul>
        </div>
        <div onClick={() => setToogle(false)} className="bg-black opacity-30 h-full w-full z-7"></div>
      </div>
    </div>
  )
}
