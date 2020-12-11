import React from "react"
import blogSectionStyles from "./blogSection.module.css"
import { Link } from 'gatsby'

export default function blogSection(props) {
  return <section className={blogSectionStyles.section}>
            <h1>Blog</h1>
            <div className={blogSectionStyles.gridContainer}>
              {props.posts.map(({ excerpt, frontmatter, fields }) => (
                    <div className={blogSectionStyles.gridItem}>
                      <img src="https://images.unsplash.com/photo-1607514835229-e4d12ac1acdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                      <div className={blogSectionStyles.details}>
                        <Link to={fields.slug}><h2>{frontmatter.title}</h2></Link>
                        <p>{excerpt}</p>
                      </div>
                    </div>
                ))}            
            </div>
            <Link to="/blog/" className={"button"}>More Posts</Link>
          </section>
}



