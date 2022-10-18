import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import AnimeCard from "../components/anime/animeCard";

const FavoritesScreen = () => {
  const favoriteAnimeState = useSelector((state) => state.favoriteAnimes);
  const favoriteMangaState = useSelector((state) => state.favoriteMangas);

  return (
    <View className="flex-col h-full pt-2 bg-black">
      <View className="flex flex-col items-center pt-12">
        <Text className="text-white text-2xl pb-4">FAVORITE ANIMES:</Text>
        <FlatList
          className="w-full"
          horizontal={true}
          data={favoriteAnimeState}
          renderItem={({ item }) => <AnimeCard anime={item} />}
        />
      </View>
      <View className="flex flex-col items-center mt-4">
        <Text className="text-white text-2xl pb-4">FAVORITE MANGAS:</Text>
        <FlatList
          className="w-full"
          horizontal={true}
          data={favoriteMangaState}
          renderItem={({ item }) => <AnimeCard anime={item} />}
        />
      </View>
    </View>
  );
};

export default FavoritesScreen;
