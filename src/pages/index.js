import React from "react"
import { Link, graphql} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {/* Header/About */}
    <section className="container">
      <div className="item about">
        <div className="content">
          <h1>Lewis Matthew Campbell</h1>
          <p>This is jsut to check how the paragraphs are working.</p>
          <p>This is jsut to check how the paragraphs are working.</p>
          <p>This is jsut to check how the paragraphs are working.</p>
          <p>This is jsut to check how the paragraphs are working.</p>
        </div>
      </div>
      <div className="item headerImage">
        <Img fixed={data.file.childImageSharp.fixed} alt="THis is an image of Lewis Matthew Campbell"/>
      </div>
    </section>
    {/* Blog */}
    <section>

    </section>
    {/* Contact */}
    <section>

    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "Profile_Picture.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
