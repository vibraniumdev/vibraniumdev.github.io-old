import React from "react"
import * as S from "./projectCard.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faStar } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = ({ reposList, isLoading }) => (
  <S.Wrapper>
    {reposList &&
      !isLoading &&
      reposList.map(
        ({ name, description, language, html_url, stargazers_count }) => (
          <S.Card
            aria-current
            rel="noopener noreferrer"
            target="_blank"
            href={html_url}
          >
            <S.Content>
              <h4>{name}</h4>
              <p>{description}</p>
            </S.Content>
            <S.Stats>
              <div>
                <FontAwesomeIcon className="icon" icon={faCode} size="1x" />
                <span>{language}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  className="icon"
                  icon={faStar}
                  size="1x"
                />
                <span>{stargazers_count}</span>
              </div>
            </S.Stats>
          </S.Card>
        )
      )}
  </S.Wrapper>
)
export default ProjectCard
