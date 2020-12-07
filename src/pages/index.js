import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
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
        <img src="https://i.imgur.com/2ph07zo.png" />
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
