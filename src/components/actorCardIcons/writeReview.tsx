import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { ListedActor } from "../../types/interfaces";
import { Link } from "react-router-dom";

const WriteReviewIcon: React.FC<ListedActor> = (actor) => {
  return (
    <Link to={"/actor/reviews/form"} state={{actorId: actor.id,}}>
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewIcon;
