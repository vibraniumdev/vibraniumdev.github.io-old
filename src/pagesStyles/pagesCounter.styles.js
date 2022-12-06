import styled from "@emotion/styled"
import { TextField, Typography } from "@mui/material"

export const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-between;
`

export const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const NumberInput = styled(TextField)`
  /* margin: 0 1rem 2rem 0; */
`

export const PaperText = styled(Typography)`
  padding: 1rem;
`
