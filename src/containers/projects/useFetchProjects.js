import React, { useState, useEffect } from "react"

import Layout from "../../components/layout"
import ProjectCard from "../../components/projectCard"
import SEO from "../../components/seo"

// import styled from "@emotion/styled"

// export const AboutContent = styled.div`
//   margin: 0 auto;
//   max-width: 860px;
//   padding: 1.45rem 1.0875rem;
// `

const useFetchProjects = () => {
  const [reposList, setReposList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const fetchProjects = () => {
    useEffect(() => {
      setIsLoading(true)
      // get data from GitHub api
      fetch(
        `https://api.github.com/users/vibraniumdev/repos?sort=updated&direction=desc`
      )
        .then((response) => response.json()) // parse JSON from request
        .then((resultData) => {
          setReposList(resultData)
          setIsLoading(false)
        }) // set data for the number of stars
    }, [])
  }

  return fetchProjects, reposList, isLoading
}

export default useFetchProjects
