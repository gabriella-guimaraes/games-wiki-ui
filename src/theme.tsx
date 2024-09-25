import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#77aefb",
    },
    secondary: {
      main: "#9804a5"
    },
    error: {
        main: "#c01263"
    },
    success: {
        main: "#04a554"
    },
    info: {
        main: "#0bb1b1"
    },
    text: {
      primary: "#e0ecfe"
    },
    background: {
      default: "#010915",
      paper: "#010915"
    }
  }
});

export default theme;