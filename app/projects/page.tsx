import React from 'react'
import data from './data'
import Link from 'next/link'

function projects(): React.JSX.Element {
  return (
    <main className="flex flex-col justify-center items-center grow">
      <div className="text-3xl font-bold mb-6">projects</div>
      {data?.map((post) => {
        return (
          <Link href={'/projects/' + post.slug} key={post.slug}>
            <div
              className="flex border-2 rounded-lg mb-3 w-96 h-28 justify-center items-center hover:bg-pink"
              key={post.slug}
            >
              {post.slug}
            </div>
          </Link>
        )
      })}
    </main>
  )
}

export default projects
