import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getActorReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { ActorT, ReviewActor } from "../../types/interfaces"; 

const styles = {
    table: {
        minWidth: 550,
    },
};

const ActorReviews: React.FC<ActorT> = (props) => { 
    const [actorreviews, setActorReviews] = useState([]);

    const actor = props;
    useEffect(() => {
        getActorReviews(actor.id).then((actorreviews) => {
            setActorReviews(actorreviews);
        });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={styles.table} aria-label="reviews table">
                <TableHead>
                    <TableRow>
                        <TableCell >Author</TableCell>
                        <TableCell align="center">Excerpt</TableCell>
                        <TableCell align="right">More</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {actorreviews.map((r: ReviewActor) => (
                        <TableRow key={r.actorId}>
                            <TableCell component="th" scope="row">
                                {r.author}
                            </TableCell>
                            <TableCell >{excerpt(r.content)}</TableCell>
                            <TableCell >
                                <Link
                                    to={`/reviews/${r.actorId}`}
                                    state={{
                                        review: r,
                                        actor: actor,
                                    }}
                                >
                                    Full Review
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ActorReviews;