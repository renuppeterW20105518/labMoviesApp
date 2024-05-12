import React from "react"; 
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import { ActorT } from "../types/interfaces";
import PageTemplate from "../components/templateActorPage";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery<ActorT, Error>(
    ["actor", id],
    ()=> getActor(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
        <PageTemplate actor={actor as ActorT}> 
          <ActorDetails {...actor as ActorT} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for actor details</p>
    )}
    </>
  );
};

export default ActorDetailsPage;