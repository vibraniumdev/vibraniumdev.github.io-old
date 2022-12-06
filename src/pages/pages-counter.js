import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import * as S from "../pagesStyles/pagesCounter.styles"
import { Divider } from "@mui/material"

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
        <S.ContentRow>
          <S.NumberInput
            type="number"
            label="Página inicial"
            onChange={handleInitialPage}
            helperText={`Inserido: ${initialPage}`}
          />
          <S.NumberInput
            type="number"
            label="Página final"
            onChange={handleLastPage}
            helperText={`Inserido: ${lastPage}`}
          />
        </S.ContentRow>
        <S.ContentRow>
          <p>Total a ser lido: {totalPagesToRead} páginas.</p>
        </S.ContentRow>

        <S.ContentRow>
          <Divider orientation="horizontal" />
        </S.ContentRow>

        <S.ContentRow>
          <S.NumberInput
            helperText={`Página atual: ${currentPage || 0}`}
            label="Última página lida"
            onChange={handleCurrentPage}
          />
        </S.ContentRow>

        <S.ContentRow>
          <p>
            Você já leu {currentPage - initialPage} das {lastPage - initialPage}{" "}
            páginas
          </p>
          <p>
            Faltam {lastPage - initialPage - (currentPage - initialPage)}{" "}
            páginas
          </p>
          <p>Você já leu um total de {percentageRead.toFixed(2)}%</p>
        </S.ContentRow>
      </S.Content>
    </Layout>
  )
}

export default PagesCounter
