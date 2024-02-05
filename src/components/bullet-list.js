import React, { Fragment } from "react"
import * as S from "./bullet-list.styles"

const BulletList = ({ topicList }) => {
  return topicList.map(({ category, name, link, subcategory }) => (
    <Fragment key={`${name}-${Math.floor(Math.random() * 100)}`}>
      <S.ThinUl>
        <li>
          <span>{category}</span>
          {category && <span>: </span>}
          <S.Link href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </S.Link>
        </li>
        {subcategory &&
          subcategory.map(({ name, link }) => {
            return (
              <ul key={`${name}-${Math.floor(Math.random() * 100)}`}>
                <a target="_blank" rel="noopener noreferrer" href={link}>
                  <li>{name}</li>
                </a>
              </ul>
            )
          })}
      </S.ThinUl>
    </Fragment>
  ))
}

export default BulletList
