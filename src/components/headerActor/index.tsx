import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ActorsIcon from "@mui/icons-material/RecentActors";
import { ActorT } from "../../types/interfaces"; 
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

interface ActorHeaderProps extends ActorT {
  isFavorite: boolean;
}

const ActorHeader: React.FC<ActorHeaderProps> = ({ name, actorpage, tagline, isFavorite }) => {
  
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {name}{"   "}
        <a href={actorpage}>
          <ActorsIcon color="primary" fontSize="large" />
        </a>
        <br />
        <span>{`${tagline}`} </span>
        {isFavorite && <FavoriteIcon color="error" />} 
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;