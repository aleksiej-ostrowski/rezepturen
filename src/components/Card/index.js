import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import TestPicture from "./test.jpg";

import { getColorByScale } from "../../utils/forcolors.js";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // maxWidth: 345, minWidth: 250,
  // sx={{ maxWidth: 345 }}>

  return (
    <Card sx={{}}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: getColorByScale(props.healthScore) }}
            aria-label="recipe"
          >
            {props.title.charAt(0)}
          </Avatar>
        }
        title={props.title}
        subheader={props.subheader}
      />

      <CardMedia
        component="img"
        height="194"
        image={props.picture}
        alt={props.title}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <div dangerouslySetInnerHTML={{ __html: props.short }} />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: props.method }} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
