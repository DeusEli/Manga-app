import React from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
//add props
interface Props {
  anime: {};
}

export default function AnimeSearchCard({ anime }: Props) {
  return (
    <View>
      <View className="flex flex-row items-start p-3 bg-slate-800 border m-2 rounded-2xl">
        <Image
          className="w-20 h-20 rounded-lg"
          source={{ uri: anime.attributes.posterImage.small }}
        />
        <View
          className="flex flex-col h-max justify-center pl-2 w-64"
          //style={{ maxWidth: "50%" }}
        >
          <Text className="text-xl font-bold text-white flex-wrap">
            {anime.attributes.canonicalTitle}
          </Text>
          <View className="flex flex-row">
            <Text className="text-sm font-bold text-white pr-1">
              <Ionicons name="md-star" size={12} color={"yellow"} />
            </Text>
            <Text className="text-sm font-bold text-yellow-400">
              {anime.attributes.averageRating}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
