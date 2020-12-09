import React from "react"
import Header from "../header/header"
import homeHeaderStyles from "./homeHeader.module.css"

export default function homeHeader() {
  return <section className={homeHeaderStyles.homeHeader}>
        <Header />
        <img src="https://images.unsplash.com/photo-1602525655920-664869d87021?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" className={homeHeaderStyles.headerImage} alt="..." />
          
          <div className={homeHeaderStyles.make}>
            <h2>Make</h2>
            <p>I make things every week to grow and build and learn new things.</p>
          </div>
        </section>
}

