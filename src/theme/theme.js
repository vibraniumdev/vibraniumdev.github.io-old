import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#64748B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      white: "#FFF",
      lighter: "#F8F9FA",
      light: "#DEE2E6",
      pure: "#ADB5BD",
      dark: "#495057",
      darker: "#212529",
    },
  },
})
