import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as S from "./landing-bio.styles"

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <S.OuterContainer>
        <S.Container>
          <S.NameHeader>{data.site.siteMetadata.title}</S.NameHeader>
          <S.Description>{data.site.siteMetadata.subtitle}</S.Description>
          <p>(Currently under construction)</p>
        </S.Container>
      </S.OuterContainer>
    )}
  />
)

// NameHeader.propTypes = {
//   siteTitle: PropTypes.string,
//   subtitle: PropTypes.string,
// }

// NameHeader.defaultProps = {
//   siteTitle: ``,
//   subtitle: ``,
// }

export default LandingBio
