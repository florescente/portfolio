import React from 'react'

interface Posts {
  params: {
    projectId: string
  }
}

function project({ params }: Posts): React.JSX.Element {
  const { projectId } = params
  return (
    <main className="flex justify-center items-center grow">
      <div className="text-3xl font-bold">{projectId}</div>
    </main>
  )
}

export default project
