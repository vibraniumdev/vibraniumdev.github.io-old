import React from "react"

const BulletList = ({ topicList }) => {
  return (
    <ul>
      {topicList.map(({ category, name, link }) => (
        <li>
          {category}:{" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default BulletList
