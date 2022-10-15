import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
//add props
interface Props {
  anime: {};
}

export default function AnimeCard({ anime }: Props) {
  const navigation = useNavigation();

  return (
    <Pressable
      className="flex flex-row items-start p-3 bg-slate-800 border m-2 rounded-2xl"
      onPress={() => {
        //console.log(anime.attributes.canonicalTitle);
        navigation.navigate("AnimeInfo", { selectedAnime: anime });
      }}
    >
      <Image
        className="w-40 h-40 rounded-lg"
        source={{ uri: anime.attributes.posterImage.small }}
      />
      <View
        className="flex flex-col h-max justify-center pl-2 w-48"
        //style={{ maxWidth: "50%" }}
      >
        <Text className="text-xl font-bold text-white flex-wrap">
          {anime.attributes.canonicalTitle}
        </Text>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">- Status:</Text>
          <Text className="text-sm text-white">{anime.attributes.status}</Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">- Episodes:</Text>
          <Text className="text-sm text-white">
            {anime.attributes.episodeCount}
          </Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">- Rating:</Text>
          <Text className="text-sm font-bold text-yellow-400">
            {anime.attributes.averageRating}
          </Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">- ID:</Text>
          <Text className="text-sm text-white">{anime.id}</Text>
        </View>
      </View>
    </Pressable>
  );
}
