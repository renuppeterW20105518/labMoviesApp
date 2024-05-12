export interface BaseMovie {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
}

export interface BaseMovieList {
  movies: BaseMovie[];
}

export interface MovieT extends BaseMovie {
  genres: {
    id: number;
    name: string;
    isFavorite: boolean;
  }[];

  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface ListedMovie extends BaseMovie {
  genre_ids: number[];
}

export type FilterOption = "title" | "genre";

export interface MovieListPageTemplateProps {
  movies: ListedMovie[];
  title: string;
  action: (m: ListedMovie) => React.ReactNode;
}

export interface Review {
  author: string;
  content: string;
  agree: boolean;
  rating: number;
  movieId: number;
}

export interface GenreData {
  genres: {
    id: string;
    name: string;
  }[];
}

interface DiscoverMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseMovie[];
}

// Actors

export interface BaseActor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
  actorpage: string | undefined;
  tagline: string;
  known_for: KnownFor[];
}

interface KnownFor {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface BaseActorList {
  actors: BaseActor[];
}

export interface ListedActor extends BaseActor {
  genre_ids: number[];
}

// export interface ActorT extends BaseActor {
//   genres: {
//     id: number;
//     name: string;
//     isFavorite: boolean
//   }[];
// }

export interface ActorT extends BaseActor {
  genres: {
    id: number;
    name: string;
    isFavorite: boolean;
  }[];
  runtime: number;
  revenue: number;
}

interface DiscoverActors {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseActor[];
}

export interface ActorListPageTemplateProps {
  actors: ListedActor[];
  title: string;
  action: (m: ListedActor) => React.ReactNode;
}

export type FilterOptionActor = "name" | "genre";

export interface ReviewActor {
  author: string;
  content: string;
  agree: boolean;
  rating: number;
  actorId: number;
}

export interface ActorImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface GenreDataActor {
  genres: {
    id: string;
    name: string;
  }[];
}

// TV Series

export interface BaseTV {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  tvpage: string | undefined;
  tagline: string;
}

export interface BaseTVList {
  series: BaseTV[];
}

export interface TVT extends BaseTV {
  genres: {
    id: number;
    name: string;
    isFavorite: boolean;
  }[];

  origin_country: {
    iso_3166_1: string;
    name: string;
  }[];
}

export interface TVImage {
  poster_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}


export interface ListedTV extends BaseTV {
  genre_ids: number[];
}

export type FilterTVOption = "name" | "genre";

export interface TVListPageTemplateProps {
  series: ListedTV[];
  name: string;
  action: (m: ListedTV) => React.ReactNode;
}

export interface ReviewTV {
  author: string;
  content: string;
  agree: boolean;
  rating: number;
  serieId: number;
}

export interface GenreTVData {
  genres: {
    id: string;
    name: string;
  }[];
}

interface DiscoverTVSeries {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseTV[];
}
