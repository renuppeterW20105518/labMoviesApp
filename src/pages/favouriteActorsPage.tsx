import React, { useContext } from "react"
import PageTemplate from "../components/templateActorListPage";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useActorFiltering from "../hooks/useActorFiltering";
import ActorFilterUI, { titleFilter } from "../components/actorFilterUI";
import { ActorT } from "../types/interfaces";
import RemoveFromFavourites from "../components/actorCardIcons/removeFromFavourites";
import WriteReview from "../components/actorCardIcons/writeReview";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};

export const genreFiltering = {
  name: "genre",
  value: "0",
  condition: function (actor: ActorT, value: string) {
    const genreId = Number(value);
    const genre_ids = actor.genres.map((g) => g.id);
    return genreId > 0 ? genre_ids.includes(genreId) : true;
  },
};

const FavouriteActorsPage: React.FC = () => {
  const { favourites: actorIds } = useContext(ActorsContext);
  const { filterValues, setFilterValues, filterFunction } = useActorFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", actorId ],
        queryFn: () => getActor(actorId.toString()),
      };
    })
  );

   const isLoading = favouriteActorQueries.find((m) => m.isLoading === true);

   if (isLoading) {
    return <Spinner />;
  }

  const allFavouritesActors = favouriteActorQueries.map((q) => q.data);
  const displayActors = allFavouritesActors
  ? filterFunction(allFavouritesActors)
  : [];

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title" ? [changedFilter, filterValues[1]] : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
      <PageTemplate
        title="Favourite Actors"
        actors={displayActors}
        action={(actor) => {
          return (
            <>
              <RemoveFromFavourites {...actor} />
              <WriteReview {...actor} />
            </>
          );
        }} />
      <ActorFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default FavouriteActorsPage;