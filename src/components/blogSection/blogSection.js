import React from "react"
import blogSectionStyles from "./blogSection.module.css"
import { Link } from 'gatsby'
import Img from "gatsby-image"

export default function blogSection(props) {
  return <section className={blogSectionStyles.section}>
            {props.title.length > 0 &&
              <Link to="/blog/" ><h1>{props.title}</h1></Link>
            }
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
          </section>
}



