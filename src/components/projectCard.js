import React from "react"
import { Wrapper, Content, Stats, Container, Card } from "./projectCard.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = ({ reposList, isLoading }) => (
  <div>
    {isLoading && <p>Loading...</p>}
    {reposList &&
      reposList.map(({ name, description, stargazers_count }) => (
        <Wrapper as={Container}>
          <Card>
            <Content>
              <h4>{name}</h4>
              <p>{description}</p>
            </Content>
            <Stats>
              <div>
                <FontAwesomeIcon icon={faStar} />
                <span>{stargazers_count}</span>
              </div>
            </Stats>
          </Card>
        </Wrapper>
      ))}
  </div>
)
export default ProjectCard
