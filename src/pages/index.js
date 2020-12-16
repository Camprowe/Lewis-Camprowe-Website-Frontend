import React from "react"
import HeaderSection from "../components/headerSection/headerSection"
import AboutSection from "../components/aboutSection/aboutSection"
import BlogSection from "../components/blogSection/blogSection"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Home({data}) {
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  const metadescription="The making of something whether physical, digital or something else entirely, is the most exciting thing anyone can do. This is the outlet for Lewis to discuss and share all the things he has and will be making.";
  const metatitle="Lewis Matthew Campbell - Maker of Things";

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{metatitle}</title>
        {/* <base target="_blank" href="https://lewismcampbell.com" /> */}
        <meta name="description" content={metadescription} />
        {/* <link rel="canonical" href="https://lewismcampbell.com" /> */}
        <meta property="og:image" content={'https://lewismcampbell.com' + sources[1].src} />
        <meta property="og:description" content={metadescription} />
        <meta property="og:title" content={metatitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lewismcampbell" />
        <meta name="twitter:creator" content="@lewismcampbell" />
        <meta name="twitter:title" content={metatitle}/>
        <meta name="twitter:description" content={metadescription} />
        <meta name="twitter:image" content={'https://lewismcampbell.com' + sources[1].src} />
      </Helmet>
      <Header />
      <HeaderSection image={sources} title="Maker of Things" description="The making of something whether physical, digital or something else entirely, is the most exciting thing anyone can do. This is the outlet for Lewis to discuss and share all the things he has and will be making. Along with the many mistakes he'll be making along the way, so you can learn from them and not make the same mistake when you make things." />
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