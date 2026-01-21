import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, //la mantiene por 24 hs
  });
  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //la mantiene por 24 hs
  });
  const topRatedMovies = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: topRatedMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //la mantiene por 24 hs
  });
  const upcomingMovies = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //la mantiene por 24 hs
  });

  return { nowPlayingQuery, popularQuery, topRatedMovies, upcomingMovies };
};
