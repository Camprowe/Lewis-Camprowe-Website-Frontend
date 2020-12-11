import React from "react"
import postSectionStyles from "./post.module.css"
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function post(props) {
  return <section className={postSectionStyles.section}>
            <div className="container">
                <MDXRenderer>{props.body}</MDXRenderer>
            </div>
        </section>
}



