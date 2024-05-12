import React, { useContext } from "react"
import PageTemplate from "../../components/templateTVListPage";
import { TVsContext } from "../../contexts/tvsContext";
import { useQueries } from "react-query";
import { getTVSerie } from "../../api/tmdb-api";
import Spinner from "../../components/spinner";
import useFiltering from "../../hooks/useFiltering";
import TVFilterUI, { titleFilter } from "../../components/tvFilterUI";
import { TVT } from "../../types/interfaces";
import RemoveFromFavourites from "../../components/tvCardIcons/removeFromFavourites";
import WriteReview from "../../components/tvCardIcons/writeReview";

const titleFiltering = {
  name: "name",
  value: "",
  condition: titleFilter,
};

export const genreFiltering = {
  name: "genre",
  value: "0",
  condition: function (serie: TVT, value: string) {
    const genreId = Number(value);
    const genre_ids = serie.genres.map((g) => g.id);
    return genreId > 0 ? genre_ids.includes(genreId) : true;
  },
};

const FavouriteTVsPage: React.FC = () => {
  const { favourites: serieIds } = useContext(TVsContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  const favouriteTVQueries = useQueries(
    serieIds.map((serieId) => {
      return {
        queryKey: ["serie", serieId ],
        queryFn: () => getTVSerie(serieId.toString()),
      };
    })
  );

   const isLoading = favouriteTVQueries.find((m) => m.isLoading === true);

   if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteTVQueries.map((q) => q.data);
  const displayTVs = allFavourites
  ? filterFunction(allFavourites)
  : [];

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name" ? [changedFilter, filterValues[1]] : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
      <PageTemplate
        name="Favourite TV Series"
        series={displayTVs}
        action={(serie) => {
          return (
            <>
              <RemoveFromFavourites {...serie} />
              <WriteReview {...serie} />
            </>
          );
        }} />
      <TVFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default FavouriteTVsPage;