import React from "react";
import TV from "../tvCard/";
import Grid from "@mui/material/Grid";
import { ListedTV } from "../../types/interfaces";

interface TVListProps {
  series: ListedTV[],
  action: (m: ListedTV) => React.ReactNode;
}

const TVList: React.FC<TVListProps> = (props) => {
  const series=props.series;
  let tvCards = series.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TV key={m.id} serie={m}  action={props.action}/>
    </Grid>
  ));
  return tvCards;
}

  export default TVList;