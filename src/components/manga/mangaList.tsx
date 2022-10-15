import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import MangaCard from "./mangaCard";

export default function MangaList() {
  const [manga, setManga] = useState([]);

  const loadManga = async () => {
    const response = await fetch("https://kitsu.io/api/edge/manga");
    const data = await response.json();
    setManga(data.data);
  };

  useEffect(() => {
    loadManga();
  }, []);

  return (
    <View className="flex flex-col items-center mt-8">
      <Text className="text-white text-2xl mb-4">MANGAS</Text>
      <FlatList
        horizontal={true}
        data={manga}
        renderItem={({ item }) => <MangaCard manga={item} />}
      />
    </View>
  );
}
