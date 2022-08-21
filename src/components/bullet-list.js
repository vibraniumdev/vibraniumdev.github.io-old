import React from "react"

const BulletList = ({ topicList }) => {
  return (
    <ul>
      {topicList.map(({ category, name, link, subcategory }) => (
        <>
          <li>
            {category}:{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
          {subcategory &&
            subcategory.map(({ name, link }) => {
              return (
                <ul>
                  <a target="_blank" rel="noopener noreferrer" href={link}>
                    <li>{name}</li>
                  </a>
                </ul>
              )
            })}
        </>
      ))}
    </ul>
  )
}

export default BulletList
