import { Movie } from "@/infraestructure/interfaces/movie-interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

type Props = {
  movies: Movie[];
  title?: string;
  classname?:string
};
const MovieHorizontalList = ({
  movies,
  title = "Default Title",
  classname,
}: Props) => {
  return (
    <View className={classname}>
      <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>
      <FlatList
        data={movies}
        horizontal
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
