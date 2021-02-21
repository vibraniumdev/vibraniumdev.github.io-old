import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import styled from "@emotion/styled"

// export const AboutContent = styled.div`
//   margin: 0 auto;
//   max-width: 860px;
//   padding: 1.45rem 1.0875rem;
// `

const Projects = () => {
  const [reposList, setReposList] = useState()
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/users/vibraniumdev/repos`)
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setReposList(resultData)
      }) // set data for the number of stars
  }, [])

  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Fetched Projects From GitHub's API</h1>
      <div>{reposList && reposList.map((repo) => <div>{repo.full_name}</div>)}</div>
    </Layout>
  )
}

export default Projects
