import React from "react"
import HomeHeader from "../components/homeHeader/homeHeader"
import { graphql } from "gatsby"

export default function Home({data}) {
  return (
    <>
      <HomeHeader headerImage={data.file.childImageSharp.fixed} />
      <section className="homeAbout">
        <h2>About</h2>
      </section>
    </>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "Venice.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`