import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as S from "./landing-bio.styles"

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            greeting
            title
            subtitle
            description
            comma
          }
        }
      }
    `}
    render={(data) => (
      <S.Content>
        <S.GreetingTitleCommaContainer>
          <S.GreetingTitleComma>
            {data.site.siteMetadata.greeting} {/* Hello */}
            {data.site.siteMetadata.title} {/* My name is */}
            <S.Name>Guilherme</S.Name>
            <S.GrayStyle>{data.site.siteMetadata.comma}</S.GrayStyle>
          </S.GreetingTitleComma>
          <S.Subtitle>{data.site.siteMetadata.subtitle}</S.Subtitle>
        </S.GreetingTitleCommaContainer>
      </S.Content>
    )}
  />
)

export default LandingBio
