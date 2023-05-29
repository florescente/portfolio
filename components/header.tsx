'use client'

import React from 'react'
import Link from 'next/link'

function header(): React.JSX.Element {
  return (
    <ul className="flex flex-row justify-center gap-x-6 h-20 items-center">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/blog">Articles</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  )
}

export default header
