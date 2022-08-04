import React, { useState } from "react"
import * as S from "../pagesStyles/about.styles"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { Collapse } from "@mui/material"

const TextCollapse = ({ title, children }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(true)

  const handleClick = () => {
    setIsCollapseOpen(!isCollapseOpen)
  }

  return (
    <>
      <S.TitleContainer onClick={handleClick}>
        <S.FlexTitle>{title}</S.FlexTitle>
        {isCollapseOpen ? <ExpandLess /> : <ExpandMore onClick={handleClick} />}
      </S.TitleContainer>
      <Collapse in={isCollapseOpen} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  )
}

export default TextCollapse
