import React from "react";
import PageTemplate from "../../components/templateTVPage";
import ReviewForm from "../../components/tvReviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTVSerie } from "../../api/tmdb-api";
import Spinner from "../../components/spinner";
import { TVT } from "../../types/interfaces";

const WriteReviewPage: React.FC = () => {
    const location = useLocation()
    const { serieId } = location.state;
    const { data: serie, error, isLoading, isError } = useQuery<TVT, Error>(
        ["serie", serieId],
        () => getTVSerie(serieId)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    return (
        <>
            {serie ? (
                    <PageTemplate serie={serie}>
                        <ReviewForm {...serie} />
                    </PageTemplate>
            ) : (
                <p>Waiting for TV series review details</p>
            )}
        </>
    );
};

export default WriteReviewPage;