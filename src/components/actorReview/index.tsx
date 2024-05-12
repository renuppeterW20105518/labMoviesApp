import React from "react";
import { ReviewActor } from "../../types/interfaces";

const ActorReview: React.FC<ReviewActor> =  (props) => {
  return (
    <>
      <p>Review By: {props.author} </p>
      <p>{props.content} </p>
    </>
  );
};
export default ActorReview