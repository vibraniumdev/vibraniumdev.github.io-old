import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import * as S from "./layout.styles";

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
        <S.Main>{children}</S.Main>
        <S.Footer>
          <span>© {new Date().getFullYear()}, made with &#x1F5A4; and</span>{" "}
          <S.GatsbyLink href="https://www.gatsbyjs.org">GatsbyJS</S.GatsbyLink>
        </S.Footer>
      </S.Content>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
