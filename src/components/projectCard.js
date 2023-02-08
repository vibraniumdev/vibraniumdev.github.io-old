import React, { useEffect, useState, useRef } from "react"
import * as S from "./projectCard.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faStar } from "@fortawesome/free-solid-svg-icons"
import useFetchLearningCenter from "../hooks/useFetchLearningCenterProjects"

const ProjectCard = () => {
  const {
    fetchLearningCenterProjects,
    learningCenterReposList,
    isLearningCenterLoading,
  } = useFetchLearningCenter()

  const [reposList, setReposList] = useState([])

  useEffect(() => {
    console.log("Rodou o fetchLearningCenterProjects")
    fetchLearningCenterProjects()
  }, [])

  useEffect(() => {
    setReposList(learningCenterReposList)
  }, [learningCenterReposList])

  return (
    <S.Wrapper>
      {reposList &&
        !isLearningCenterLoading &&
        reposList.map(
          (
            { name, description, language, html_url, stargazers_count, fork },
            index
          ) => (
            <S.Card
              aria-current
              rel="noopener noreferrer"
              target="_blank"
              href={html_url}
              key={index}
            >
              <S.Content>
                {fork ? (
                  <h4>
                    {name} <span>(forked)</span>
                  </h4>
                ) : (
                  <h4>{name}</h4>
                )}
                <p>{description}</p>
              </S.Content>
              <S.Stats>
                <div>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faCode}
                    size="1x"
                    fixedWidth
                  />
                  <span>{language}</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faStar}
                    size="1x"
                    fixedWidth
                  />
                  <span>{stargazers_count}</span>
                </div>
              </S.Stats>
            </S.Card>
          )
        )}
    </S.Wrapper>
  )
}
export default ProjectCard
