import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import * as S from "../pagesStyles/pagesCounter.styles"
import { Divider, Paper, Button, Card } from "@mui/material"

const PagesCounter = () => {
  const [initialPage, setInitialPage] = useState(267) // deixar 0 como padrão
  const [lastPage, setLastPage] = useState(343)

  const [totalPagesToRead, setTotalPagesToRead] = useState(0)
  const [pagesRead, setPagesRead] = useState(10)

  const [currentPage, setCurrentPage] = useState(282)

  const [percentageRead, setPercentageRead] = useState(0)

  const handleInitialPage = ({ target: { value } }) => setInitialPage(value)

  const handleLastPage = ({ target: { value } }) => setLastPage(value)

  const handleCurrentPage = ({ target: { value } }) => setCurrentPage(value)

  useEffect(() => {
    setTotalPagesToRead(lastPage - initialPage)
  }, [lastPage, initialPage])

  useEffect(() => {
    setPagesRead(totalPagesToRead - currentPage)
  }, [currentPage, totalPagesToRead])

  useEffect(() => {
    setPercentageRead(((currentPage - initialPage) * 100) / totalPagesToRead)
  }, [pagesRead, lastPage, initialPage])

  return (
    <Layout>
      <S.Content>
        <Card sx={{ marginBottom: "1rem" }} variant="outlined">
          <S.ContentColumn>
            <S.NumberInput
              type="number"
              label="Página inicial"
              onChange={handleInitialPage}
              helperText={`Inserido: ${initialPage}`}
              sx={{ marginRight: "1rem" }}
            />
            <S.NumberInput
              type="number"
              label="Página final"
              onChange={handleLastPage}
              helperText={`Inserido: ${lastPage}`}
            />
          </S.ContentColumn>
          <S.ContentRow>
            <Paper elevation="3">
              <S.PaperText paragraph variant="string">
                Total a ser lido: {totalPagesToRead} páginas
              </S.PaperText>
            </Paper>
          </S.ContentRow>
        </Card>

        <Card variant="outlined">
          <S.ContentColumn>
            <S.NumberInput
              sx={{ marginRight: "1rem" }}
              // helperText={`Página atual: ${currentPage || 0}`}
              label="Última página lida"
              onChange={handleCurrentPage}
            />
            {/* <Button size="large" variant="contained"> */}
            {/*   Calcular */}
            {/* </Button> */}
          </S.ContentColumn>
          <S.ContentRow>
            <Paper elevation="3">
              <S.PaperText>Página atual: {currentPage || 0}</S.PaperText>
            </Paper>
          </S.ContentRow>

          <S.ContentRow>
            <Paper sx={{ marginBottom: "1rem" }} elevation="3">
              <S.PaperText>
                Você já leu {currentPage - initialPage} das{" "}
                {lastPage - initialPage} páginas (
                {lastPage - initialPage - (currentPage - initialPage)}{" "}
                restantes)
              </S.PaperText>
            </Paper>

            <Paper sx={{ marginBottom: "1rem" }} elevation="3">
              <S.PaperText>
                Você já leu um total de {percentageRead.toFixed(2)}%
              </S.PaperText>
            </Paper>
          </S.ContentRow>
        </Card>
      </S.Content>
    </Layout>
  )
}

export default PagesCounter
