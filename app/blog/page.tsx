import React from 'react'
import Link from 'next/link'
import path from 'path'
import { sync } from 'glob'

function blog(): React.JSX.Element {
  const articlesPath = path.join(process.cwd(), 'app/blog/articles')
  const paths = sync(`${articlesPath}/*.mdx`)

  return (
    <main className="flex flex-col justify-center items-center grow">
      <div className="text-3xl font-bold mb-6">blogs</div>
      {paths?.map((path) => {
        const pathContent = path.split('/')
        const fileName = pathContent[pathContent.length - 1]
        const slug = fileName.split('.')[0]
        return (
          <Link href={'/blog/' + slug} key={slug}>
            <div
              className="flex border-2 rounded-lg mb-3 w-96 h-28 justify-center items-center hover:bg-pink"
              key={slug}
            >
              {slug}
            </div>
          </Link>
        )
      })}
    </main>
  )
}

export default blog
