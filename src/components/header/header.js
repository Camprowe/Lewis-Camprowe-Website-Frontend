import React from "react"
import { Link } from 'gatsby';
import headerStyles from "./header.module.css"

export default function Header() {
  return <header className={headerStyles.header}>
    <div className={headerStyles.logo}>
      <Link to="/">Lewis Matthew Campbell</Link>
    </div>
    <div className={headerStyles.blog}>
      <Link to={`/blog/`}>Blog</Link>
    </div>
  </header>
}