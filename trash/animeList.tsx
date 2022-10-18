import React, { useState, useEffect } from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";
import AnimeCard from "./animeCard";

export default function AnimeList() {
  const [anime, setAnime] = useState([]);

  const loadAnime = async () => {
    const response = await fetch("https://kitsu.io/api/edge/anime");
    const data = await response.json();
    setAnime(data.data);
  };

  useEffect(() => {
    loadAnime();
  }, []);

  return (
    <View className="flex flex-col items-center">
      <Text className="text-white text-2xl pb-4">ANIMES</Text>
      <FlatList
        horizontal={true}
        data={anime}
        renderItem={({ item }) => <AnimeCard anime={item} />}
      />
    </View>
  );
}
