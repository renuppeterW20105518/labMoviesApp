import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../../components/templateTVPage";
import TVReview from "../../components/tvReview";

const TVReviewPage: React.FC = () => {
  const { state : {serie, review } } = useLocation()
  return (
    <PageTemplate serie={serie}>
      <TVReview {...review} />
    </PageTemplate>
  );
};

export default TVReviewPage;