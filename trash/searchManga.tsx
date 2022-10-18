import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import MangaSearchCard from "./mangaSearchCard";

const SearchMangaScreen = () => {
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
    <View className="flex flex-col items-start pl-1 scroll-pr-10 h-full bg-black">
      <FlatList
        className="w-full"
        horizontal={false}
        data={manga}
        renderItem={({ item }) => <MangaSearchCard manga={item} />}
      />
    </View>
  );
};

export default SearchMangaScreen;
