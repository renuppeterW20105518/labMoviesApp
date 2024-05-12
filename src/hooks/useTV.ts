import { useEffect, useState } from "react";
import { getTVSerie } from '../api/tmdb-api'
import { TVT } from '../types/interfaces'

const useTV = (id: string) => {
    const [serie, setSerie] = useState<TVT | null>(null);
    useEffect(() => {
        getTVSerie(id).then(serie => {
            setSerie(serie);
        });
    }, [id]);
  
    return [serie];
};

export default useTV