import React, { useState, useEffect } from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";
import MangaVolCard from "./mangaVolCard";

interface Props {
  volume_id: number;
}

export default function MangaVolList({ volume_id }: Props) {
  const [volume, setVolume] = useState([]);

  const loadVolume = async () => {
    const response = await fetch(
      `https://kitsu.io/api/edge/manga/${volume_id}/chapters`
    );
    const data = await response.json();
    setVolume(data.data);
  };

  useEffect(() => {
    loadVolume();
  }, []);

  return (
    <View className="flex flex-col items-center">
      <FlatList
        horizontal={true}
        data={volume}
        renderItem={({ item }) => <MangaVolCard volume={item} />}
      />
    </View>
  );
}
