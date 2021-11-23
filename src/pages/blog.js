import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as S from "../pagesStyles/blog.styles"

const Blog = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <S.Content>
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <S.SimpleHeader>{node.frontmatter.title}</S.SimpleHeader>
              </Link>
              <div>
                <S.ArticleDate>{node.frontmatter.date}</S.ArticleDate>
                <S.ReadingTime> - {node.fields.readingTime.text}</S.ReadingTime>
              </div>
              <p>{node.excerpt}</p>
            </div>
          ))}
      </S.Content>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
