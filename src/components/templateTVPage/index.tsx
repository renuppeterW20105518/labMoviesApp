import React from "react";
import HeaderTV from "../headerTV";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTVImages } from "../../api/tmdb-api";
import { TVImage, TVT } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: 450,
        height: '100vh',
    },
};

interface TemplateTVPageProps {
    serie: TVT;
    children: React.ReactElement;
}


const TemplateTVPage: React.FC<TemplateTVPageProps> = (props) => {
    const { serie, children } = props;
    const { data, error, isLoading, isError } = useQuery<TVImage[], Error>(
        ["images", serie.id],
        () => getTVImages(serie.id)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{(error

        ).message}</h1>;
    }

    const images = data as TVImage[];

    return (
        <>
            <HeaderTV isFavorite={false} {...serie} />

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div>
                        <ImageList cols={1}>
                            {images.map((image: TVImage) => (
                                <ImageListItem
                                    key={image.poster_path}
                                    sx={styles.gridListTile}
                                    cols={1}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`}
                                        alt={'Image alternative'}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Grid>

                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateTVPage;