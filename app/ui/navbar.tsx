'use client'

import { useState } from "react"
import Search from "./search"
import Hamburger from "./hamburger"
import '@/app/ui/css/sidebar.css'

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
        <div
          className={`sidebar-menu ${(toogle) ? 'open' : 'close'} z-11 px-10 py-10 h-full bg-white`}
        >
          <ul className="text-black flex flex-col justify-between min-h-[250px]">
            <li className="my-8 uppercase">
              <a href="/about">About</a>
            </li>
            <li className="my-8 uppercase">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="my-8 uppercase">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div onClick={() => setToogle(false)} className="bg-black opacity-30 h-full w-full z-7"></div>
      </div>
    </div>

  )
}
