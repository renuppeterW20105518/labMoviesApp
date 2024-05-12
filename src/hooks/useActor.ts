import { useEffect, useState } from "react";
import { getActor } from '../api/tmdb-api'
import { ActorT } from '../types/interfaces'

const useActor = (id: string) => {
    const [actor, setActor] = useState<ActorT | null>(null);
    useEffect(() => {
        getActor(id).then(actor => {
            setActor(actor);
        });
    }, [id]);
  
    return [actor];
};

export default useActor