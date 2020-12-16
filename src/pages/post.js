import { graphql } from 'gatsby'
import React from 'react'
import Header from "../components/header/header"
import HeaderImage from "../components/headerSection/headerSection"
import Footer from "../components/footer/footer"
import Post from "../components/post/post"

export const query = graphql
    `
    query MdxBlogPost ($id: String!) {
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
    if (data !== undefined){
        console.log("Data" + data);
        const { frontmatter, body } = data.mdx
        return (
            <>
                <Header />
                <HeaderImage image={frontmatter.image.childImageSharp.fluid} title={frontmatter.title} description={frontmatter.description} />
                <Post body={body} />
                <Footer />
            </>
        )
    } else {
        return (<Header />)
    }
}