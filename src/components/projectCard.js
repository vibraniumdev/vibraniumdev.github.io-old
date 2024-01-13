import React from "react"
import * as S from "./projectCard.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faStar } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = ({ reposList, isLoading }) => {
  return (
    <S.Wrapper>
      {reposList &&
        !isLoading &&
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
                  <span>{language ? language : "unknown"}</span>
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
