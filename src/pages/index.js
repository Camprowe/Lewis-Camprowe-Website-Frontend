import React from "react"
import HeaderSection from "../components/headerSection/headerSection"
import AboutSection from "../components/aboutSection/aboutSection"
import BlogSection from "../components/blogSection/blogSection"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import { graphql } from "gatsby"

export default function Home({data}) {
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
      <HeaderSection image={sources} title="Maker of Things" description="The making of something whether physical, digital or something else entirely, is the most exciting thing anyone can do. This is my outlet to discuss and share all the things I have and will be making." />
      <AboutSection />
      <BlogSection posts={data.allMdx.nodes} moreposts={true} title="Blog" /> 
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    desktopImage: file(relativePath: { eq: "Venice.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobileImage: file(relativePath: { eq: "Venice.jpg" }) {
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
      filter: {frontmatter: {published: {eq: true}}},
      limit: 3
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