import React from 'react'
import path from 'path'
import { sync } from 'glob'

interface Posts {
  params: {
    blogId: string
  }
}

async function article({ params }: Posts): Promise<React.JSX.Element> {
  const { blogId } = params
  const Article = React.lazy(
    async () => await import(`../articles/${blogId}.mdx`)
  )
  return (
    <main className="flex justify-center items-center grow flex-col">
      <div className="text-3xl font-bold">{blogId}</div>
      <Article />
    </main>
  )
}

export async function generateStaticParams(): Promise<
  Array<{
    slug: string
  }>
> {
  const articlesPath = path.join(process.cwd(), 'app/blog/articles')
  const paths = sync(`${articlesPath}/*.mdx`)
  return paths.map((path: any) => {
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const slug = fileName.split('.')[0]
    return slug
  })
}

export default article
