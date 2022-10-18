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
      <View className="flex flex-row bg-black border-4 items-center border-stone-900 m-2 rounded-2xl">
        <Image
          className="w-20 h-28 rounded-lg"
          source={{ uri: manga.attributes.posterImage.small }}
        />
        <View
          className="flex flex-col h-max justify-center pl-2 w-64"
          //style={{ maxWidth: "50%" }}
        >
          <View className="flex items-center">
            <Text className="text-xl font-bold text-white flex-wrap">
              {manga.attributes.canonicalTitle}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
