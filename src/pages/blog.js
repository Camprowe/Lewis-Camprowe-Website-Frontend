import React from "react"
import Header from "../components/header/header"
import HeaderImage from "../components/headerSection/headerSection"
import BlogPostSection from "../components/blogPostSection/blogPostSection"
import Footer from "../components/footer/footer"
import { graphql } from "gatsby"

export default function Blog({data}) {
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <>
      <Header />
      <HeaderImage image={sources} title="Blog" description="My musings and learnings as a maker of things. What have I learnt or thought about while making things every week, whether I've been developing a project, creating and growing a brand, worldbuilding places to explore or investigating technologies." />
      <BlogPostSection posts={data.allMdx.nodes} />
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    desktopImage: file(relativePath: { eq: "Blog.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobileImage: file(relativePath: { eq: "Blog.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100, maxWidth: 768) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC},
      filter: {frontmatter: {published: {eq: true}}}
    ){
        nodes {
            id
            excerpt(pruneLength: 250)
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
                image {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                description
            }
            fields {
                slug
            }
        }
    }
  }
`