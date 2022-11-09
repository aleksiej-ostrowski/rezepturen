import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  typography: {
    background: "#f000",
  },
});

export default function Footer() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
