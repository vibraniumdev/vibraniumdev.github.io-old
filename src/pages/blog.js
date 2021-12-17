import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as S from "../pagesStyles/blog.styles"

const Blog = () => {
  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      await fetch(`https://dev.to/api/articles/latest?username=guiteixeira`)
        .then((response) => response.json())
        .then((resultData) => {
          setPostList(resultData)
        })

      setIsLoading(false)
    }
    fetchPosts()
  }, [])

  return (
    <Layout>
      <Seo title="Blog" />
      <S.Content>
        <h1>Blog</h1>
        <div>
          {postList &&
            !isLoading &&
            postList.map(
              ({
                url,
                title,
                readable_publish_date,
                reading_time_minutes,
                description,
              }) => (
                <div>
                  <Link
                    to={url}
                    css={css`
                      text-decoration: none;
                      color: inherit;
                    `}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <S.SimpleHeader>{title}</S.SimpleHeader>
                  </Link>
                  <div>
                    <S.ArticleDate>{readable_publish_date}</S.ArticleDate>
                    <S.ReadingTime>
                      {" "}
                      - {reading_time_minutes} min read
                    </S.ReadingTime>
                  </div>
                  <p>{description}</p>
                </div>
              )
            )}
        </div>
      </S.Content>
    </Layout>
  )
}

export default Blog
