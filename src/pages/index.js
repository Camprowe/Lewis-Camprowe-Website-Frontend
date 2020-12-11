import React from "react"
import HomeHeader from "../components/homeHeader/homeHeader"
import AboutSection from "../components/aboutSection/aboutSection"
import BlogSection from "../components/blogSection/blogSection"
import Footer from "../components/footer/footer"
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
      <HomeHeader headerImage={sources} />
      <AboutSection />
      <BlogSection posts={data.allMdx.nodes} />
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    desktopImage: file(relativePath: { eq: "Venice.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobileImage: file(relativePath: { eq: "Venice_Mobile.png" }) {
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