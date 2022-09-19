import React, { Fragment } from "react"

const BulletList = ({ topicList }) => {
  return topicList.map(({ category, name, link, subcategory }) => (
    <Fragment key={`${name}-${Math.floor(Math.random() * 100)}`}>
      <ul>
        <li>
          <span>{category}</span>
          {category && <span>: </span>}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
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
      </ul>
    </Fragment>
  ))
}

export default BulletList
