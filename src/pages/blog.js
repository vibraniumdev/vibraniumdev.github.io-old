import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as S from "../pagesStyles/blog.styles";
import NProgress from "nprogress";

const Blog = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      NProgress.start();
      await fetch(`https://dev.to/api/articles/latest?username=guiteixeira`)
        .then((response) => response.json())
        .then((resultData) => {
          setPostList(resultData);
        });
      NProgress.done();
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Seo title="Articles" />
      <S.Content>
        <h1>Articles</h1>
        {postList.map(
          ({ id, url, title, readable_publish_date, reading_time_minutes, description }) => (
            <S.PostContainer key={id}>
              <S.PostLink href={url} rel="noopener noreferrer" target="_blank">
                <S.PostTitle>
                  <S.SimpleHeader>{title}</S.SimpleHeader>
                  <S.OpenInNewIcon fontSize="small" />
                </S.PostTitle>

                <div>
                  <S.ArticleDate>{readable_publish_date}</S.ArticleDate>
                  <S.ReadingTime> - {reading_time_minutes} min read</S.ReadingTime>
                  <p>{description}</p>
                </div>
              </S.PostLink>
            </S.PostContainer>
          )
        )}
      </S.Content>
    </Layout>
  );
};

export default Blog;
