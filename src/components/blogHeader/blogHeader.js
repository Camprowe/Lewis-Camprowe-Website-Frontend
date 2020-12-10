import React from "react"
import Header from "../header/header"
import blogHeaderStyles from "./blogHeader.module.css"
import Img from "gatsby-image"

export default function blogHeader(props) {
  return <section className={blogHeaderStyles.section}>
        <Header/>
        <Img fluid={props.headerImage} className={blogHeaderStyles.headerImage} alt="..." />          
          <div className={blogHeaderStyles.make}>
            <h2>Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie est et neque rhoncus, et luctus lorem iaculis. Quisque porta in massa eget finibus. Nulla molestie tellus et tempor commodo. Proin iaculis nisi vitae ante elementum lobortis eu et quam.</p>
          </div>
        </section>
}



