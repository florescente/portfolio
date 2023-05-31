import React from 'react'

interface Posts {
  params: {
    blogId: string
  }
}

function article({ params }: Posts): React.JSX.Element {
  const { blogId } = params
  return (
    <main className="flex justify-center items-center grow">
      <div className="text-3xl font-bold">{blogId}</div>
    </main>
  )
}
export default article
