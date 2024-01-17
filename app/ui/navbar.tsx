'use client'

import { useState } from "react"
import NavbarButton from "./navbar-button"
import NavbarSearch from "./navbar-search"

export default function Navbar() {
  const [toogle, setToogle] = useState(false)

  function switchToogle(): void {
    setToogle(!toogle)
  }

  return (
    <div className="flex flex-row gap-3 m-3">
      <NavbarButton switchToogle={switchToogle} toogle={toogle} />
      <NavbarSearch />
    </div>
  )
}
