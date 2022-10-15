import React from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
//add props
interface Props {
  manga: {};
}

export default function MangaSearchCard({ manga }: Props) {
  return (
    <View>
      <View className="flex flex-row items-start p-3 bg-slate-800 border m-2 rounded-2xl">
        <Image
          className="w-20 h-20 rounded-lg"
          source={{ uri: manga.attributes.posterImage.small }}
        />
        <View className="flex flex-col h-max justify-center pl-2 w-64">
          <Text className="text-xl font-bold text-white flex-wrap">
            {manga.attributes.canonicalTitle}
          </Text>
          <View className="flex flex-row">
            <Text className="text-sm font-bold text-white pr-1">
              <Ionicons name="md-star" size={12} color={"yellow"} />
            </Text>
            <Text className="text-sm font-bold text-yellow-400">
              {manga.attributes.averageRating
                ? manga.attributes.averageRating
                : "N/A"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
