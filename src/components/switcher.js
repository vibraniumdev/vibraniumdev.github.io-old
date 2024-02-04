import React, { useContext, useEffect } from "react"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"

import { useTheme } from "@mui/material/styles"
import { ColorModeContext } from "./layout"

function Switcher() {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  useEffect(() => {
    console.log("colorMode:")
    console.log(colorMode)
  }, [])

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        marginLeft: "1rem",
        p: 0.25,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        onClick={colorMode.toggleColorMode}
        sx={{ ml: 1 }}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  )
}

export default Switcher
