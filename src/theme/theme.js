import { createTheme } from "@mui/material/styles"

// Palette Source: https://coolors.co/palette/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529

export const theme = createTheme({
  palette: {
    neutral: {
      white: "#FFF",
      lighter: "#F8F9FA",
      light: "#DEE2E6",
      pure: "#ADB5BD",
      dark: "#495057",
      darker: "#212529",
    },
    lightTheme: {
      primary: "#FFF",
      tertiary: "#F8F9FA",
      light: "#DEE2E6",
      pure: "#ADB5BD",
      variant: "#495057",
      secondary: "#212529",
    },
    darkTheme: {
      primary: "#212529",
      secondary: "#FFF",
      pure: "#ADB5BD",
      variant: "#495057",
      tertiary: "#F8F9FA",
      light: "#DEE2E6",
    },
  },
})

// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#64748B",
//       contrastText: "#fff",
//     },
//     secondary: {
//       main: "#0971f1",
//       darker: "#053e85",
//     },
//     neutral: {
//       white: "#FFF",
//       lighter: "#F8F9FA",
//       light: "#DEE2E6",
//       pure: "#ADB5BD",
//       dark: "#495057",
//       darker: "#212529",
//     },
//   },
// })
