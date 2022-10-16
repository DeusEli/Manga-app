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
      className="flex flex-row items-start m-2 mr-8 bg-slate-800 border rounded-2xl"
      onPress={() => {
        //console.log(anime.attributes.canonicalTitle);
        navigation.navigate("MangaInfo", { selectedAnime: manga });
      }}
    >
      <Image
        className="w-40 h-60 rounded-lg"
        source={{ uri: manga.attributes.posterImage.small }}
      />
      <View
        className="flex flex-col w-full justify-center absolute left-2 bottom-0 pr-2"
        //style={{ maxWidth: "50%" }}
      >
        <Text className="text-xl font-bold text-white flex-wrap">
          {manga.attributes.canonicalTitle}
        </Text>
      </View>
    </Pressable>
  );
}
