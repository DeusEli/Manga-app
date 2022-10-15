import React from "react";
import { View, Text, Image } from "react-native";
//add props
interface Props {
  anime: {};
}

export default function AnimeCard({ anime }: Props) {
  return (
    <View className="flex flex-row items-start w-50 p-3 bg-slate-800 border m-2 rounded-2xl">
      <Image
        className="w-40 h-40 rounded-lg"
        source={{ uri: anime.attributes.posterImage.small }}
      />
      <View className="flex flex-col h-max justify-center pl-2">
        <Text className="text-xl font-bold text-white">
          {anime.attributes.canonicalTitle}
        </Text>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">Status:</Text>
          <Text className="text-sm text-white">{anime.attributes.status}</Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">Episodes:</Text>
          <Text className="text-sm text-white">
            {anime.attributes.episodeCount}
          </Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">Rating:</Text>
          <Text className="text-sm font-bold text-yellow-400">
            {anime.attributes.averageRating}
          </Text>
        </View>
      </View>
    </View>
  );
}
