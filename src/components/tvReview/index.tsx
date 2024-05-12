import React from "react";
import { ReviewTV } from "../../types/interfaces";

const TVReview: React.FC<ReviewTV> =  (props) => {
  return (
    <>
      <p>Review By: {props.author} </p>
      <p>{props.content} </p>
    </>
  );
};
export default TVReview