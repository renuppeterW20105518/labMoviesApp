import React from "react"; 
import { useParams } from "react-router-dom";
import TVDetails from "../../components/tvDetails";
import { TVT} from "../../types/interfaces";
import PageTemplate from "../../components/templateTVPage";
import { getTVSerie } from '../../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../../components/spinner'

const TVDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: serie, error, isLoading, isError } = useQuery<TVT, Error>(
    ["serie", id],
    ()=> getTVSerie(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {serie ? (
        <>
        <PageTemplate serie={serie as TVT}> 
          <TVDetails {...serie as TVT} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for TV series details</p>
    )}
    </>
  );
};

export default TVDetailsPage;