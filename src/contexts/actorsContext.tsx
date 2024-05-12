import React, { useState } from "react";
import { ListedActor,ActorT, ReviewActor } from "../types/interfaces";

interface ActorContextInterface {
    favourites: number[];
    addToFavourites: ((actor: ListedActor) => void);
    removeFromFavourites: ((actor: ListedActor) => void);
    addReview: ((actor: ActorT, review: ReviewActor) => void);  
}

const initialContextState: ActorContextInterface = {
    favourites: [],
    addToFavourites: (actor) => {actor.id },
    removeFromFavourites: (actor) => { actor.id},
    addReview: (actor, review) => { actor.id, review},  
};


export const ActorsContext = React.createContext<ActorContextInterface>(initialContextState);;

const ActorsContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [favourites, setFavourites] = useState<number[]>([]);
    const [myReviews, setMyReviews] = useState<ReviewActor[]>( [] )

    const addToFavourites = (actor: ListedActor) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(actor.id)) {
            updatedFavourites.push(actor.id);
        }
        setFavourites(updatedFavourites);
    };

    const removeFromFavourites = (actor: ListedActor) => {
        setFavourites(favourites.filter((mId) => mId !== actor.id));
    };

    const addReview = (actor: ActorT, review: ReviewActor) => {   
        setMyReviews( {...myReviews, [actor.id]: review } )
      };

    return (
        <ActorsContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
            }}
        >
            {props.children}
        </ActorsContext.Provider>
    );
};

export default ActorsContextProvider;