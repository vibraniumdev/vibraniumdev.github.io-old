import React from "react";
import * as S from "../pagesStyles/about.styles";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

const TextCollapse = ({ title, children, startsExpanded }) => {
  return (
    <Accordion
      sx={{
        border: "none",
        boxShadow: "none",
        padding: "0",
      }}
      defaultExpanded={startsExpanded}
    >
      <AccordionSummary
        sx={{
          paddingLeft: "0",
        }}
        expandIcon={<ExpandMore />}
      >
        <S.FlexTitle>{title}</S.FlexTitle>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: "0",
        }}
      >
        <Typography>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default TextCollapse;
