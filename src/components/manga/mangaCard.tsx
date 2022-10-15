import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";

interface Props {
  manga: {};
}

export default function MangaCard({ manga }: Props) {
  const navigation = useNavigation();

  return (
    <Pressable
      className="flex flex-row items-start w-50 p-3 bg-slate-800 border m-2 rounded-2xl"
      onPress={() => {
        //console.log(anime.attributes.canonicalTitle);
        navigation.navigate("MangaInfo", { selectedAnime: manga });
      }}
    >
      <Image
        className="w-40 h-40 rounded-lg"
        source={{ uri: manga.attributes.posterImage.small }}
      />
      <View className="flex flex-col h-max justify-center pl-2">
        <Text className="text-xl font-bold text-white">
          {manga.attributes.canonicalTitle}
        </Text>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">Status:</Text>
          <Text className="text-sm text-white">{manga.attributes.status}</Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">Volumes:</Text>
          <Text className="text-sm text-white">
            {manga.attributes.volumeCount}
          </Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">Rating:</Text>
          <Text className="text-sm font-bold text-yellow-400">
            {manga.attributes.averageRating
              ? manga.attributes.averageRating
              : "N/A"}
          </Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-sm font-bold text-white pr-1">ID:</Text>
          <Text className="text-sm text-white">{manga.id}</Text>
        </View>
      </View>
    </Pressable>
  );
}
