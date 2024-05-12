import React from "react";
import Header from "../headerActorList";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";
import {  ActorListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const ActorListPageTemplate: React.FC<ActorListPageTemplateProps> = (props)=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header name={props.title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList
          action={props.action}
          actors={props.actors}
        ></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;