import React from "react"
import headerStyles from "./header.module.css"

export default function Header() {
  return <header className={headerStyles.header}>
    <div className={headerStyles.logo}>
      Lewis Matthew Campbell
    </div>
    <div className={headerStyles.blog}>
      Blog
    </div>
  </header>
}