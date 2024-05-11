import { useEffect, useState } from "react";
import { getMovie } from '../api/tmdb-api'
import { MovieT } from '../types/interfaces'

const useMovie = (id: string) => {
    //const [movie, setMovie] = useState<MovieT>();
    const [movie, setMovie] = useState<MovieT | null>(null);
    useEffect(() => {
        getMovie(id).then(movie => {
            setMovie(movie);
        });
    }, [id]);
  
    return [movie];
    //return [movie, setMovie];
};

export default useMovie