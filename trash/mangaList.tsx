import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import MangaCard from "./mangaCard";

export default function MangaList(txt: string) {
  const [manga, setManga] = useState([]);
  const filter = txt;

  const loadManga = async (filter) => {
    const params = !!filter ? `?filter[text]=${filter}` : "";
    const response = await fetch("https://kitsu.io/api/edge/manga" + params);
    const data = await response.json();
    console.log(params);
    setManga(data.data);
  };

  useEffect(() => {
    loadManga("");
  }, []);

  return (
    <View className="flex flex-col items-center mt-4">
      <Text className="text-white text-2xl mb-4">MANGAS</Text>
      <FlatList
        horizontal={true}
        data={manga}
        renderItem={({ item }) => <MangaCard manga={item} />}
      />
    </View>
  );
}
