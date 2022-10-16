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
      className="flex flex-row items-start bg-slate-800 border m-2 mr-8 rounded-2xl"
      onPress={() => {
        //console.log(anime.attributes.canonicalTitle);
        navigation.navigate("AnimeInfo", { selectedAnime: anime });
      }}
    >
      <Image
        className="w-40 h-60 rounded-lg"
        source={{ uri: anime.attributes.posterImage.small }}
      />
      <View
        className="flex flex-col w-full justify-center absolute left-2 bottom-0 pr-2"
        //style={{ maxWidth: "50%" }}
      >
        <Text className="text-xl font-bold text-white flex-wrap">
          {anime.attributes.canonicalTitle}
        </Text>
      </View>
    </Pressable>
  );
}
