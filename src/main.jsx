import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans",
  },
  colorSchemes: {
    dark: {
      palette: {
        background: {
          default: "hsl(207, 26%, 17%)",
          paper: "hsl(209, 23%, 22%)",
        },
        text: {
          primary: "hsl(0, 100%, 100%)",
          secondary: "hsl(0, 100%, 100%)",
        },
      },
    },
    light: {
      palette: {
        background: {
          default: "hsl(0, 0%, 99%)",
          paper: "hsl(0, 100%, 100%)",
        },
        text: {
          primary: "hsl(200, 15%, 8%)",
          secondary: "hsl(0, 0%, 50%)",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode="light">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
