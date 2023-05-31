'use client'

import React from 'react'
import Link from 'next/link'

function header(): React.JSX.Element {
  return (
    <nav className="bg-amethyst border border-white flex justify-center">
      <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl p-4">
        <button
          type="button"
          className="flex md:hidden p-2 rounded-lg hover:bg-finn"
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
        <div className="hidden md:block md:w-auto">
          <ul className="flex flex-row justify-center gap-x-6 items-center p-3">
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

export default header
