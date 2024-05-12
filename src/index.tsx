import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import TVsContextProvider from "./contexts/tvsContext";
import ActorsContextProvider from "./contexts/actorsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingPage from "./pages/upcomingPage";
import ActorPage from "./pages/actorPage";
import TVPage from "./pages/TVPage/tvPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import FavouriteTVsPage from "./pages/TVPage/favouriteTVsPage";
import UpcomingTVPage from "./pages/TVPage/upcomingTVPage";
import TVReviewPage from "./pages/TVPage/tvReviewPage";
import AddTVReviewPage from "./pages/TVPage/addTVReviewPage";
import ActorReviewPage from "./pages/actorReviewPage";
import AddActorReviewPage from "./pages/addActorReviewPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
        <ActorsContextProvider>
      <TVsContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/movies/upcoming" element={<UpcomingPage />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />

        <Route path="/actors/actor" element={<ActorPage/>}/>
        <Route path="/actors/favourites" element={<FavouriteActorsPage/>}/>
        <Route path="/actorReviews/:id" element={<ActorReviewPage/>} />
        <Route path="/actorReviews/form" element={<AddActorReviewPage/>} />
        
        <Route path="/tv/series" element={<TVPage/>}/>
        <Route path="/tv/favourites" element={<FavouriteTVsPage/>}/>
        <Route path="/tv/upcoming" element={<UpcomingTVPage/>}/>
        <Route path="/tvReviews/:id" element={<TVReviewPage/>}/>
        <Route path="/tvReviews/form" element={<AddTVReviewPage/>} />
      </Routes>
      </TVsContextProvider>
      </ActorsContextProvider>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
