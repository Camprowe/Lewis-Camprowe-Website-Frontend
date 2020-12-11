import React from "react"
import blogSectionStyles from "./blogSection.module.css"
import { Link } from 'gatsby'
import Img from "gatsby-image"

export default function blogSection(props) {
  return <section className={blogSectionStyles.section}>
            <h1>Blog</h1>
            <div className={blogSectionStyles.gridContainer}>
              {props.posts.map(({ excerpt, frontmatter, fields }) => (
                    <div className={blogSectionStyles.gridItem}>
                      <Link to={fields.slug}><Img fluid={frontmatter.image.childImageSharp.fluid} /></Link>
                      <div className={blogSectionStyles.details}>
                        <Link to={fields.slug}><h2>{frontmatter.title}</h2></Link>
                        <p>{frontmatter.description}</p>
                      </div>
                    </div>
                ))}            
            </div>
            <Link to="/blog/" className={"button"}>More Posts</Link>
          </section>
}



