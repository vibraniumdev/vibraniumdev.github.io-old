/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import * as S from "./layout.styles"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <S.Content>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <S.Footer>
          <p>© {new Date().getFullYear()}, Made with &#x1F5A4; and</p>
          <S.GatsbyLink href="https://www.gatsbyjs.org">Gatsby</S.GatsbyLink>
        </S.Footer>
      </S.Content>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
