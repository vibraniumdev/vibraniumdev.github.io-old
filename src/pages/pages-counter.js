import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import * as S from "../pagesStyles/pagesCounter.styles"
import { Button, Card, TextField, Typography } from "@mui/material"

const PagesCounter = () => {
  const [initialPage, setInitialPage] = useState(267) // deixar 0 como padrão
  const [lastPage, setLastPage] = useState(343)

  const [totalPagesToRead, setTotalPagesToRead] = useState(0)
  const [pagesRead, setPagesRead] = useState(10)

  const [currentPage, setCurrentPage] = useState(282)

  const [percentageRead, setPercentageRead] = useState(0)

  const [isResultsShown, setIsResultsShown] = useState(false)

  useEffect(() => {
    setTotalPagesToRead(lastPage - initialPage)
  }, [lastPage, initialPage])

  useEffect(() => {
    setPagesRead(totalPagesToRead - currentPage)
  }, [currentPage, totalPagesToRead])

  useEffect(() => {
    setPercentageRead(((currentPage - initialPage) * 100) / totalPagesToRead)
  }, [pagesRead, lastPage, initialPage])

  const alreadyRead = currentPage - initialPage
  const totalPages = lastPage - initialPage

  const handleInitialPage = ({ target: { value } }) => setInitialPage(value)

  const handleLastPage = ({ target: { value } }) => setLastPage(value)

  const handleCurrentPage = ({ target: { value } }) => {
    setIsResultsShown(false)
    setCurrentPage(value)
  }

  const handleShowResults = () => {
    setIsResultsShown((currState) => !currState)
    console.log("Clicou no botão")
  }

  return (
    <Layout>
      <S.Content>
        <S.ContentColumn>
          <TextField
            type="number"
            label="Página inicial"
            onChange={handleInitialPage}
            helperText={`Inserido: ${initialPage}`}
            sx={{ marginRight: "1rem" }}
          />
          <TextField
            type="number"
            label="Página final"
            onChange={handleLastPage}
            helperText={`Inserido: ${lastPage}`}
          />
        </S.ContentColumn>

        <Card sx={{ marginBottom: "3rem" }} variant="outlined">
          <S.ContentRow>
            <Card sx={{ marginBottom: "0rem" }} variant="outlined">
              <Typography sx={{ padding: "1rem" }} paragraph variant="string">
                Total a ser lido: {totalPagesToRead} páginas
              </Typography>
            </Card>
          </S.ContentRow>
        </Card>

        <S.ContentColumn>
          <TextField
            sx={{ marginRight: "1rem" }}
            label="Última página lida"
            onChange={handleCurrentPage}
            fullWidth
          />
          <Button variant="contained" onClick={handleShowResults}>
            Calcular
          </Button>
        </S.ContentColumn>

        <Card variant="outlined">
          <S.ContentRow>
            <Card sx={{ marginBottom: "1rem" }} variant="outlined">
              <Typography sx={{ padding: "1rem" }} paragraph>
                Página atual: {isResultsShown ? currentPage : "0"}
              </Typography>
            </Card>

            <Card sx={{ marginBottom: "1rem" }} variant="outlined">
              <Typography sx={{ padding: "1rem" }} paragraph>
                Você já leu {isResultsShown ? alreadyRead : 0} das {totalPages}{" "}
                páginas ({isResultsShown ? totalPages - alreadyRead : 0}{" "}
                restantes)
              </Typography>
            </Card>

            <Card sx={{ marginBottom: "1rem" }} variant="outlined">
              <Typography sx={{ padding: "1rem" }} paragraph>
                Você já leu um total de{" "}
                {isResultsShown ? percentageRead.toFixed(1) : 0}%
              </Typography>
            </Card>
          </S.ContentRow>
        </Card>
      </S.Content>
    </Layout>
  )
}

export default PagesCounter
