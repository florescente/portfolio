'use client'

import React from 'react'
import Link from 'next/link'
import links from './data'
import { usePathname } from 'next/navigation'

function Header(): React.JSX.Element {
  const [istoggled, toggle] = React.useState(false)
  const pathname = usePathname()

  return (
    <nav
      className="bg-amethyst border border-white flex justify-center"
      // onMouseLeave={() => {
      //   toggle(false)
      // }}
    >
      <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl p-4">
        <button
          type="button"
          className="flex md:hidden p-2 rounded-lg hover:bg-finn mr-12 anibutton"
          onClick={() => {
            toggle(!istoggled)
          }}
        >
          <svg
            className="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <Link href="/" className="animenu">
          Sarah Nakada
        </Link>
        <ul
          className={`${
            istoggled
              ? 'top-[80px] opacity-100 translate-y-0 mx-auto border md:border-none'
              : '-translate-y-full md:translate-y-0 opacity-0 md:opacity-100 md:border-none'
          } absolute left-0 top-[-400px] bg-amethyst order-last w-full z-[0] gap-y-4 gap-x-6 p-3 md:flex md:justify-center md:items-center md:static md:z-auto md:mt-0 md:flex-row md:order-[0] md:w-max transition-all ease-in duration-300`}
          onClick={() => {
            toggle(false)
          }}
        >
          {links?.map((link) => {
            const isActive = pathname.split('/')[1] === link.href

            return (
              <li className="animenu my-6 md:my-0 text-center" key={link.name}>
                <Link
                  href={link.href}
                  className={`${isActive ? 'font-semibold' : ''} p-3`}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <button className="border rounded-full p-2 px-5 anibutton">
          resume
        </button>
      </div>
    </nav>
  )
}

export default Header
