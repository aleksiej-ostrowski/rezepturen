import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";

import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import EmailIcon from "@mui/icons-material/Email";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Button variant="contained">Hello World</Button>
      <hr />
      <Button variant="contained">Hello World</Button>

      <Badge badgeContent={4} color="primary">
        <EmailIcon color="action" />
      </Badge>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
