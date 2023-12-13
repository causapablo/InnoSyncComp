import React from 'react'
import Link from 'next/link'
function NavBar() {
  return (
    <div className='container max-w-[1300px] mx-auto font-Title'>
      <ul className='flex items-center gap-16 text-black justify-end font-bold'>
        <Link href={"/home"}>
          <li>
            Home
          </li>
        </Link>
        <Link href={"/about"}>
          <li>
            About
          </li>
        </Link>
        <Link href={"/services"}>
          <li>
            Services
          </li>
        </Link>
        <Link href={"/contact"}>
          <li>
            Contact
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBar
