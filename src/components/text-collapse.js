import React, {useState} from "react"
import * as S from "../pagesStyles/about.styles"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { Collapse, ListItemText } from "@mui/material"


const TextCollapse = ({ title, children }) => {
  const teste = "teste"
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
