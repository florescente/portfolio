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
      className="bg-amethyst border border-white flex justify-center z-50"
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
          <div
            className={`${
              istoggled ? 'open' : ''
            } burguer h-8 w-8 relative rotate-0 transition ease-in-out duration-500`}
          >
            <span className="top-[6px]"></span>
            <span className="top-[14px]"></span>
            <span className="top-[14px]"></span>
            <span className="top-[22px]"></span>
          </div>
        </button>
        <Link href="/" className="animenu">
          Sarah Nakada
        </Link>
        <ul
          className={`${
            istoggled
              ? 'h-[288px] p-0 mx-auto border border-t-0 md:border-none md:p-3'
              : 'h-0 p-0 md:border-none md:p-3'
          } absolute left-0 bg-amethyst z-[-1] top-[80px] overflow-hidden order-last w-full gap-y-4 gap-x-6 md:flex md:justify-center md:items-center md:static md:z-auto md:h-auto md:mt-0 md:flex-row md:order-[0] md:w-max transition-all ease-in duration-300`}
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
