import React, { useState } from "react";
import { ListedTV,TVT,  ReviewTV } from "../types/interfaces";

interface TVContextInterface {
    favourites: number[];
    addToFavourites: ((serie: ListedTV) => void);
    removeFromFavourites: ((serie: ListedTV) => void);
    addReview: ((serie: TVT, review: ReviewTV) => void);  
}

const initialContextState: TVContextInterface = {
    favourites: [],
    addToFavourites: (serie) => {serie.id },
    removeFromFavourites: (serie) => { serie.id},
    addReview: (serie, review) => { serie.id, review},  
};


export const TVsContext = React.createContext<TVContextInterface>(initialContextState);;

const TVsContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [favourites, setFavourites] = useState<number[]>([]);
    const [myReviews, setMyReviews] = useState<ReviewTV[]>( [] )

    const addToFavourites = (serie: ListedTV) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(serie.id)) {
            updatedFavourites.push(serie.id);
        }
        setFavourites(updatedFavourites);
    };

    const removeFromFavourites = (serie: ListedTV) => {
        setFavourites(favourites.filter((mId) => mId !== serie.id));
    };

    const addReview = (serie: TVT, review: ReviewTV) => {   
        setMyReviews( {...myReviews, [serie.id]: review } )
      };

    return (
        <TVsContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
            }}
        >
            {props.children}
        </TVsContext.Provider>
    );
};

export default TVsContextProvider;