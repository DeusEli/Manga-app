import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import AnimeFavCard from "../components/anime/animeFavCard";

const FavoritesScreen = () => {
  const favoriteState = useSelector((state) => state.favorites);
  console.log(favoriteState);

  return (
    <View className="flex flex-col items-start pl-1 scroll-pr-10 h-full bg-black">
      <FlatList
        className="w-full"
        horizontal={false}
        data={favoriteState}
        renderItem={({ item }) => <AnimeFavCard anime={item} />}
      />
    </View>
  );
};

export default FavoritesScreen;
