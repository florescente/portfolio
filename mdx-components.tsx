import type { MDXComponents } from 'mdx/types'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl my-2 px-5">{children}</h3>,
    p: ({ children }) => <p className="text-base px-8">{children}</p>,
    ul: ({ children }) => <ul className="list-disc px-4">{children}</ul>,
    ...components,
  }
}
