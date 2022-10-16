import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AnimeEpList from "../components/anime/animeEpList";

const AnimeInfo = ({ route }) => {
  const selectedAnimeData = route.params.selectedAnime;

  // console.log(route.params.selectedAnime.attributes.canonicalTitle);
  // console.log("ola");
  return (
    <SafeAreaView className="fle h-full">
      <ScrollView className="bg-black h-full">
        <View className="flex flex-col items-center m-4">
          <Image
            className="h-96 w-80 rounded-lg"
            source={{ uri: selectedAnimeData.attributes.posterImage.medium }}
          />
          {/* <Image
            className="h-80 w-96 rounded-lg"
            source={{ uri: selectedAnimeData.attributes.coverImage.large }}
          /> */}
        </View>
        {/* Names */}
        <View className="pl-4">
          <Text className="text-white text-4xl">
            {selectedAnimeData.attributes.canonicalTitle}
          </Text>
          <Text className="text-slate-300 text-2xl pt-2">
            {selectedAnimeData.attributes.titles.ja_jp}
          </Text>
        </View>
        {/* Rating */}
        <View className="pl-4">
          <Text className="text-yellow-400 text-lg pt-2">
            {selectedAnimeData.attributes.averageRating}
          </Text>
        </View>
        {/* Age Rating */}
        <View className="flex flex-row pl-4">
          <Text className="text-red-900 text-lg pt-2">
            {selectedAnimeData.attributes.ageRating}
          </Text>
          <Text className="text-red-900 text-lg pt-2"> - </Text>
          <Text className="text-red-900 text-lg pt-2">
            {selectedAnimeData.attributes.ageRatingGuide}
          </Text>
        </View>
        {/* Start and End dates */}
        <View className="flex flex-row pl-4">
          <Text className="text-gray-500 text-lg pt-2 italic">
            {selectedAnimeData.attributes.startDate}
          </Text>
          <Text className="text-gray-500 text-lg pt-2 italic"> - </Text>
          <Text className="text-gray-500 text-lg pt-2 italic ">
            {selectedAnimeData.attributes.endDate
              ? selectedAnimeData.attributes.endDate
              : "Ongoing"}
          </Text>
        </View>
        {/* Synopsis */}
        <View className="p-4">
          <Text className="text-white text-xl mb-2">Synopsis:</Text>
          <Text className="text-white text-xs">
            {selectedAnimeData.attributes.synopsis}
          </Text>
        </View>
        {/* Episodes */}
        <View className="p-4">
          <Text className="text-white text-xl mb-2">Episodes:</Text>
          <AnimeEpList episode_id={selectedAnimeData.id} />
        </View>
        {/* Cast */}
        <View className="p-4">
          <Text className="text-white text-xl mb-2">Characters:</Text>
          <AnimeEpList episode_id={selectedAnimeData.id} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimeInfo;
