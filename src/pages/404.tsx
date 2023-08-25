import * as React from "react"
import { HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-secondary h-screen">
      {/* Body */}
      <section className="flex items-center h-5/6 justify-center">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-lg font-extralight leading-8 text-dark">404 Page not Found</p>
            <h1 className="mt-3 text-[3.5rem] font-semibold leading-[4rem] tracking-tight text-black"></h1>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/" className="transform rounded-md border border-primary px-5 py-3 font-regular text-primary"> Return Home </a>
        </div>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
