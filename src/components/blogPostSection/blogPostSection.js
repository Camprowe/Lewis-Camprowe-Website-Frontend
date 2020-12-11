import React from "react"
import blogPostSectionStyles from "./blogPostSection.module.css"
import { Link } from 'gatsby'

export default function blogSection(props) {
  return <section className={blogPostSectionStyles.section}>
            <div className={blogPostSectionStyles.gridContainer}>

              {props.posts.map(({ excerpt, frontmatter, fields }) => (
                    <div className={blogPostSectionStyles.gridItem}>
                      <img src="https://images.unsplash.com/photo-1607514835229-e4d12ac1acdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                      <div className={blogPostSectionStyles.details}>
                        <Link to={fields.slug}><h2>{frontmatter.title}</h2></Link>
                        <p>{excerpt}</p>
                      </div>
                    </div>
                ))}
                    
            </div>
          </section>
}



