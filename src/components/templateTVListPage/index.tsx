import React from "react";
import Header from "../headerTVList";
import Grid from "@mui/material/Grid";
import TVList from "../tvList";
import { TVListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const TVListPageTemplate: React.FC<TVListPageTemplateProps> = (props)=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header name={props.name} />
      </Grid>
      <Grid item container spacing={5}>
        <TVList
          action={props.action} series={props.series}
        ></TVList>
      </Grid>
    </Grid>
  );
}
export default TVListPageTemplate;