import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { TVT } from "../../types/interfaces";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import TVReviews from '../tvReviews'

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
    fab: { 
      position: "fixed",
      top: 50,
      right: 2,
    },
};

const TVDetails: React.FC<TVT> = (props) => {
    const serie=props;
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {serie.overview}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                {serie.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <Chip
                    icon={<StarRate />}
                    label={`${serie.vote_average} (${serie.vote_count}`}
                />
                <Chip label={`First Air: ${serie.first_air_date}`} />
            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Origin Countries" sx={styles.chipLabel} color="primary" />
                </li>
                {props.origin_country.map((country) => (
                    <li key={country.iso_3166_1}>
                        <Chip label={country.name} />
                    </li>
                ))}
            </Paper>
            <Fab color="secondary" variant="extended" onClick={() =>setDrawerOpen(true)} sx={styles.fab}>
            <NavigationIcon /> Reviews
            </Fab>
             <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TVReviews {...serie} />
      </Drawer>
        </>
    );
};
export default TVDetails;