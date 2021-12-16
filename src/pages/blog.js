import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as S from "../pagesStyles/blog.styles"
import useFetchPosts from "../hooks/useFetchPosts"

const Blog = () => {
  const { fetchPosts, postList, isLoading } = useFetchPosts()

  useEffect(() => {
    fetchPosts()
  }, [])

  console.log("Post:")
  postList && !isLoading && postList.map((post) => console.log(post.title))

  return (
    <Layout>
      <Seo title="Blog" />
      <S.Content>
        <h1>Blog</h1>
        <div>
          {postList &&
            !isLoading &&
            postList.map((post) => (
              <div>
                <Link
                  to={post.url}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.SimpleHeader>{post.title}</S.SimpleHeader>
                </Link>
                <div>
                  <S.ArticleDate>{post.readable_publish_date}</S.ArticleDate>
                  <S.ReadingTime>
                    {" "}
                    - {post.reading_time_minutes} min read
                  </S.ReadingTime>
                </div>
                <p>{post.description}</p>
              </div>
            ))}
        </div>
      </S.Content>
    </Layout>
  )
}

{
  /* {data.allMarkdownRemark.edges
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
          ))} */
}

export default Blog

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { draft: { eq: false } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//             rawDate: date
//             path
//           }
//           fields {
//             slug
//             readingTime {
//               text
//             }
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `
