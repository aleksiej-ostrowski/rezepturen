import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";

import Select from "../Select";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          6 Zufallsrezepte
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
