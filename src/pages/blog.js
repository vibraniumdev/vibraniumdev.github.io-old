import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as S from "../pagesStyles/blog.styles"
import NProgress from "nprogress"

const Blog = () => {
  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      NProgress.start()
      await fetch(`https://dev.to/api/articles/latest?username=guiteixeira`)
        .then((response) => response.json())
        .then((resultData) => {
          setPostList(resultData)
        })

      setIsLoading(false)
      NProgress.done()
    }
    fetchPosts()
  }, [])

  return (
    <Layout>
      <Seo title="Articles" />
      <S.Content>
        <h1>Articles</h1>
        <div>
          {postList &&
            !isLoading &&
            postList.map(
              (
                {
                  url,
                  title,
                  readable_publish_date,
                  reading_time_minutes,
                  description,
                },
                index
              ) => (
                <div key={index}>
                  <S.PostLink
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <S.SimpleHeader>{title}</S.SimpleHeader>
                  </S.PostLink>
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
