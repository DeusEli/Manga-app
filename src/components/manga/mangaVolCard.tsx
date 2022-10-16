import React from "react";
import { View, Text, Image } from "react-native";
//add props
interface Props {
  volume: {};
}

export default function MangaVolCard({ volume }: Props) {
  return (
    <View>
      <View className="flex flex-row items-start p-3 bg-stone-900 border m-2 rounded-2xl">
        {/* <Image
          className="w-20 h-20 rounded-lg text-white"
          source={{
            uri: volume.attributes.thumbnail
              ? volume.attributes.thumbnail
              : "https://cdn-icons-png.flaticon.com/128/4173/4173686.png",
          }}
        /> */}
        <View className="flex flex-col h-max justify-center pl-2 w-42">
          <View className="flex flex-row">
            <Text className="text-xl font-bold text-white pr-1">Chapter</Text>
            <Text className="text-xl font-bold text-white">
              {volume.attributes.number}
            </Text>
          </View>
          <View className="flex flex-row">
            <View className="flex flex-row">
              <Text className="text-sm font-bold text-gray-500 italic pr-1">
                Volume
              </Text>
              <Text className="text-sm font-bold text-gray-500">
                {volume.attributes.volumeNumber
                  ? volume.attributes.volumeNumber
                  : "1"}
              </Text>
            </View>
          </View>

          {/* <View className="flex flex-row">
            <Text className="text-sm font-bold text-gray-500 italic pr-1">
              Release:
            </Text>
            <Text className="text-sm font-bold text-gray-500">
              {episode.attributes.airdate ? episode.attributes.airdate : "N/A"}
            </Text>
          </View> */}
        </View>
      </View>
    </View>
  );
}
