'use client'

import React from 'react'
import Link from 'next/link'

function Header(): React.JSX.Element {
  const [istoggled, toggle] = React.useState(false)
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
          className="flex md:hidden p-2 rounded-lg hover:bg-finn mr-12"
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
        <div>Sarah Nakada</div>
        <div
          className={
            istoggled
              ? 'block w-full border-t-2 mt-4 order-last md:block md:w-auto md:border-none md:mt-0'
              : 'hidden md:block md:w-auto'
          }
        >
          <ul className="flex flex-col md:flex-row justify-center gap-x-6 items-center p-3">
            <li>
              <Link href="/" className="p-3">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="p-3">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="p-3">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="p-3">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/contact" className="p-3">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button className="border rounded-full p-2 px-5 hover:bg-finn">
          resume
        </button>
      </div>
    </nav>
  )
}

export default Header
