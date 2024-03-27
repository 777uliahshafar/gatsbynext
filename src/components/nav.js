import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Link from "next/link"
import styles from "./_nav.module.scss"

//NavLink component

const NavLink = props => (
  <Link className={styles.link} href={props.to}>
    <a>{props.text}</a>
  </Link>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <nav className={styles.navContainer}>
        <div className={styles.row}>
          <NavLink href="/" text="Articles" />
          <NavLink href="/about" text="About" />
          <NavLink href="/tags" text="Tags" />
        </div>
      </nav>
    )}
  />
)
