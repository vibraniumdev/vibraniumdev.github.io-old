import React, { createContext, useMemo, useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import * as S from "./layout.styles"

import { ThemeProvider, createTheme } from "@mui/material/styles"

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

const Layout = ({ children }) => {
  const [mode, setMode] = useState("light")

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )
  return (
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
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <S.Content>
              <Header siteTitle={data.site.siteMetadata.title} />
              <S.Main>{children}</S.Main>
              <S.Footer>
                <span>
                  © {new Date().getFullYear()}, made with &#x1F5A4; and
                </span>{" "}
                <S.GatsbyLink href="https://www.gatsbyjs.org">
                  GatsbyJS
                </S.GatsbyLink>
              </S.Footer>
            </S.Content>
          </ThemeProvider>
        </ColorModeContext.Provider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
