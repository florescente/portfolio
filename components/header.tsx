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
      onMouseLeave={() => {
        toggle(false)
      }}
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
        <div
          className={
            istoggled
              ? 'block w-full border-t-2 mt-4 order-last md:block md:w-auto md:border-none md:mt-0'
              : 'hidden md:block md:w-auto'
          }
        >
          <ul
            className="flex gap-y-4 mt-3 md:mt-0 flex-col md:flex-row justify-center gap-x-6 items-center p-3"
            onClick={() => {
              toggle(false)
            }}
          >
            {links?.map((link) => {
              const isActive = pathname.split('/')[1] === link.href

              return (
                <li className="animenu" key={link.name}>
                  <Link
                    href={link.href}
                    className={isActive ? 'p-3 font-semibold' : 'p-3'}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <button className="border rounded-full p-2 px-5 anibutton">
          resume
        </button>
      </div>
    </nav>
  )
}

export default Header
