import React, { useState } from "react";
import FilterTVsCard from "../filterTVsCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { ListedTV } from "../../types/interfaces";

export const titleFilter = function (serie: ListedTV, value: string) {
  console.log("Serie name:", serie.name);
  console.log("Value:", value);
  return serie.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = function (serie: ListedTV, value: string) {
  const genreId = Number(value);
  return genreId > 0 ? serie.genre_ids.includes(genreId) : true;
};

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

interface TVFilterUIProps {
  onFilterValuesChange: (f: string, s: string) => void;
  titleFilter: string;
  genreFilter: string;
}


const TVFilterUI: React.FC<TVFilterUIProps> = ({ onFilterValuesChange, titleFilter, genreFilter }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterTVsCard
          onUserInput={onFilterValuesChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>
  );
};

export default TVFilterUI;