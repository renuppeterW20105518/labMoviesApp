import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateActorPage";
import ActorReview from "../components/actorReview";

const ActorReviewPage: React.FC = () => {
  const { state : {actor, review } } = useLocation()
  return (
    <PageTemplate actor={actor}>
      <ActorReview {...review} />
    </PageTemplate>
  );
};

export default ActorReviewPage;