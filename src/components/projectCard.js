import React from "react"
import { Wrapper, Content, Stats, Container, Card } from "./projectCard.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = ({ reposList, isLoading }) => (
  <Wrapper as={Container}>
    {isLoading && <p>Loading...</p>}
    {reposList &&
      reposList.map(({ name, description, language }) => (
        <Card>
          <Content>
            <h4>{name}</h4>
            <p>{description}</p>
          </Content>
          <Stats>
            <div>
              <FontAwesomeIcon className="icon" icon={faCode} size="1x" />
              <span>{language}</span>
            </div>
          </Stats>
        </Card>
      ))}
  </Wrapper>
)
export default ProjectCard
