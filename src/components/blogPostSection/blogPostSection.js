import React from "react"
import blogPostSectionStyles from "./blogPostSection.module.css"
import { Link } from 'gatsby'
import Img from "gatsby-image"

export default function blogSection(props) {
  return <section className={blogPostSectionStyles.section}>
            <div className={blogPostSectionStyles.gridContainer}>
                {props.posts.map(({ excerpt, frontmatter, fields }) => (
                    <div className={blogPostSectionStyles.gridItem}>
                      <Link to={fields.slug}><Img fluid={frontmatter.image.childImageSharp.fluid} /></Link>
                      <div className={blogPostSectionStyles.details}>
                        <Link to={fields.slug}><h2>{frontmatter.title}</h2></Link>
                        <p>{frontmatter.description}</p>
                      </div>
                    </div>
                ))}                     
            </div>
          </section>
}



