import React from 'react'

function about(): React.JSX.Element {
  return (
    <main className="flex justify-center items-center grow flex-col">
      <div className="text-3xl font-bold">About</div>
      <div className="mt-8 flex flex-col justify-center items-center w-5/6 md:w-4/6 gap-5 md:flex-row md:gap-10">
        <p className="w-3/4">
          Hello! I&apos;m Sarah, a passionate full-stack developer since high
          school. I thrive in creating innovative and user-friendly applications
          that solve real-world problems. My expertise lies in developing both
          the front-end and back-end components of web applications, allowing me
          to build cohesive and seamless user experiences.
        </p>
        <p className="w-3/4 md:self-start mt-3 md:mt-0">
          On the front-end, I&apos;m proficient in HTML, CSS, and JavaScript,
          and I have experience with popular frameworks such as React. I enjoy
          crafting visually appealing and responsive interfaces, ensuring that
          users can navigate and interact with the application effortlessly.
        </p>
      </div>
    </main>
  )
}

export default about
