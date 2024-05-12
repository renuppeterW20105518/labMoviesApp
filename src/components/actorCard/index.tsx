import React, { useContext, MouseEvent } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { ActorsContext } from "../../contexts/actorsContext";
import { ListedActor } from "../../types/interfaces";
import { ImportContacts } from "@mui/icons-material";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface ActorListProps {
  actor: ListedActor;
  action: (m: ListedActor) => React.ReactNode;
}

const ActorCard: React.FC<ActorListProps> = (props) => {
  const actor = { ...props.actor, favourite: false };
  const { favourites, addToFavourites } = useContext(ActorsContext);

  if (favourites.find((id) => id === actor.id)) actor.favourite = true;  
  
  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
            actor.favourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
      sx={styles.media}
        image={
            actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {/* <CalendarIcon fontSize="small" /> */}
              {<ImportContacts fontSize="small"/>}
              {actor.known_for_department}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actor.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {props.action(actor)}
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ActorCard;
