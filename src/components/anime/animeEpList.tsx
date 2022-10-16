import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import AnimeEpCard from "./animeEpCard";

interface Props {
  episode_id: number;
}

export default function AnimeEpList({ episode_id }: Props) {
  const [episode, setEpisode] = useState([]);

  const loadEpisode = async () => {
    const response = await fetch(
      `https://kitsu.io/api/edge/anime/${episode_id}/episodes`
    );
    const data = await response.json();
    setEpisode(data.data);
  };

  useEffect(() => {
    loadEpisode();
  }, []);

  return (
    <View className="flex flex-col items-center">
      <FlatList
        horizontal={true}
        data={episode}
        renderItem={({ item }) => <AnimeEpCard episode={item} />}
      />
    </View>
  );
}
