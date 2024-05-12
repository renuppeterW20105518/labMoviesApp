import React, {MouseEvent, useContext} from "react";
import { TVsContext } from "../../contexts/tvsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {ListedTV} from "../../types/interfaces"

const AddToFavouritesIcon: React.FC<ListedTV> = (serie) => {
  const context = useContext(TVsContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToFavourites(serie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;