import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import BlogHeader from "../blogHeader/blogHeader"
import Footer from "../footer/footer"

export const query = graphql
    `
    query PostsByID($id: String!) {
        mdx(
            id: { eq: $id }
        ){
            body
            frontmatter {
                title
                description
                image {
                    childImageSharp {
                      fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            }
        }
    }
`

export default ({ data }) => {
    const { frontmatter, body } = data.mdx
    return (
        <>
            <BlogHeader headerImage={frontmatter.image.childImageSharp.fluid} title={frontmatter.title} description={frontmatter.description} />
            <MDXRenderer>{body}</MDXRenderer>
            <Footer />
        </>
    )
}