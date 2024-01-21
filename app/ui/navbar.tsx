'use client'

import { useState } from "react"
import NavbarButton from "./navbar-button"
import NavbarSearch from "./navbar-search"
import '@/app/ui/css/sidebar.css'

export default function Navbar() {
  const [toogle, setToogle] = useState(false)

  function switchToogle(): void {
    setToogle(!toogle)
  }

  return (
    <div className="flex flex-row gap-3 m-3">
      <NavbarButton toogleButton={switchToogle} />
      <NavbarSearch />

      <div className={`${(toogle) ? 'showSideNav' : 'hideSideNav'} absolute top-0 left-0 w-full h-full `}>
        <div
          className="z-11 px-10 py-10 w-[35rem] h-full bg-white"
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
