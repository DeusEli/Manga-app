import React from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
//add props
interface Props {
  episode: {};
}

export default function AnimeEpCard({ episode }: Props) {
  return (
    <View>
      <View className="flex flex-row items-start p-3 bg-stone-900 border m-2 rounded-2xl">
        <Image
          className="w-20 h-20 rounded-lg text-white"
          source={{
            uri: episode.attributes.thumbnail
              ? episode.attributes.thumbnail.original
              : //: "https://cdn-icons-png.flaticon.com/128/812/812897.png",
                //"https://cdn-icons-png.flaticon.com/128/7852/7852088.png",
                "https://cdn-icons-png.flaticon.com/128/4173/4173686.png",
          }}
        />
        <View
          className="flex flex-col h-max justify-center pl-2 w-42"
          //style={{ maxWidth: "50%" }}
        >
          <Text className="text-xl font-bold text-white flex-wrap">
            {episode.attributes.canonicalTitle
              ? episode.attributes.canonicalTitle
              : "N/A"}
          </Text>
          <View className="flex flex-row">
            <Text className="text-sm font-bold text-white pr-1">
              <Ionicons name="stopwatch" size={12} color="white" />
            </Text>
            <Text className="text-sm font-bold text-white">
              {episode.attributes.length ? episode.attributes.length : "1"}
            </Text>
            <Text className="text-sm font-bold text-white pr-1"> Min</Text>
          </View>

          <View className="flex flex-row">
            <View className="flex flex-row">
              <Text className="text-sm font-bold text-gray-500 italic pr-1">
                Season
              </Text>
              <Text className="text-sm font-bold text-gray-500">
                {episode.attributes.SeasonNumber
                  ? episode.attributes.SeasonNumber
                  : "1"}
              </Text>
            </View>
            <Text className="text-gray-500"> - </Text>
            <View className="flex flex-row">
              <Text className="text-sm font-bold text-gray-500 italic pr-1">
                Episode
              </Text>
              <Text className="text-sm font-bold text-gray-500">
                {episode.attributes.number}
              </Text>
            </View>
          </View>

          <View className="flex flex-row">
            <Text className="text-sm font-bold text-gray-500 italic pr-1">
              Release:
            </Text>
            <Text className="text-sm font-bold text-gray-500">
              {episode.attributes.airdate ? episode.attributes.airdate : "N/A"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
