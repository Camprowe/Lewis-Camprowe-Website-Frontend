import * as React from "react"
import { HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main lang="en" className="bg-secondary h-screen">
      {/* Body */}
      <section className="flex items-center h-screen justify-center">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-dark">404 Page not Found</p>
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">I can go no further. You alone must stand against the Prince of Destruction and his mortal servants. He must not have the Amulet of Kings! Take the Amulet. Give it to Jauffre. He alone knows where to find my last son. Find him, and close shut the jaws of Oblivion.</h1>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/" className="transform rounded-md border border-primary px-5 py-3 font-medium text-primary"> Return Home </a>
        </div>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <>
  <html lang="en" />
  <link rel="icon" href="images/compass.svg"></link>
  <title>Not found</title>
</>
