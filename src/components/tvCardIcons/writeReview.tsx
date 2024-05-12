import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { ListedTV } from "../../types/interfaces";
import { Link } from "react-router-dom";

const WriteReviewIcon: React.FC<ListedTV> = (serie) => {
  return (
    <Link to={"/tv/reviews/form"} state={{serieId: serie.id,}}>
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewIcon;
