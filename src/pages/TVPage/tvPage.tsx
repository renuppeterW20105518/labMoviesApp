import React from "react";
import PageTemplate from "../../components/templateTVListPage";
import { getTVSeries } from "../../api/tmdb-api";
import useTVFiltering from "../../hooks/useTVFiltering";
import TVFilterUI, { titleFilter, genreFilter, } from "../../components/tvFilterUI";
import { DiscoverTVSeries, ListedTV } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../../components/spinner";
import AddToFavouritesIcon from "../../components/tvCardIcons/addToFavourites";

const titleFiltering = {
  name: "name",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const TVPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverTVSeries, Error>(
    "discover",
    getTVSeries
  );
  const { filterValues, setFilterValues, filterFunction } = useTVFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const series = data ? data.results : [];
  const displayedTVSeries = filterFunction(series);

  return (
    <>
      <PageTemplate
        name="Discover TV Series"
        series={displayedTVSeries}
        action={(serie: ListedTV) => {
          return <AddToFavouritesIcon {...serie} />;
        }}
      />

      <TVFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};
export default TVPage;
