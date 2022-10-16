import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MangaVolList from "../components/manga/mangaVolList";

const MangaInfo = ({ route }) => {
  const selectedMangaData = route.params.selectedManga;

  // console.log(route.params.selectedAnime.attributes.canonicalTitle);
  // console.log("ola");
  return (
    <SafeAreaView className="fle h-full">
      <ScrollView className="bg-black h-full">
        <View className="flex flex-col items-center m-4">
          <Image
            className="h-96 w-80 rounded-lg"
            source={{ uri: selectedMangaData.attributes.posterImage.medium }}
          />
          {/* <Image
            className="h-80 w-96 rounded-lg"
            source={{ uri: selectedAnimeData.attributes.coverImage.large }}
          /> */}
        </View>
        {/* Names */}
        <View className="pl-4">
          <Text className="text-white text-4xl">
            {selectedMangaData.attributes.canonicalTitle}
          </Text>
          <Text className="text-slate-300 text-2xl pt-2 italic">
            {selectedMangaData.attributes.titles.ja_jp
              ? selectedMangaData.attributes.titles.ja_jp
              : "No Japanese Title..."}
          </Text>
        </View>
        {/* Rating */}
        <View className="pl-4">
          <Text className="text-yellow-400 text-lg pt-2">
            {selectedMangaData.attributes.averageRating
              ? selectedMangaData.attributes.averageRating
              : "N/A"}
          </Text>
        </View>
        {/* Age Rating */}
        <View className="flex flex-row pl-4">
          <Text className="text-red-900 text-lg pt-2">
            {selectedMangaData.attributes.ageRating
              ? selectedMangaData.attributes.ageRating
              : "No Rating"}
          </Text>
          <Text className="text-red-900 text-lg pt-2"> - </Text>
          <Text className="text-red-900 text-lg pt-2">
            {selectedMangaData.attributes.ageRatingGuide
              ? selectedMangaData.attributes.ageRatingGuide
              : "No TV Rating"}
          </Text>
        </View>
        {/* Start and End dates */}
        <View className="flex flex-row pl-4">
          <Text className="text-gray-500 text-lg pt-2 italic">
            {selectedMangaData.attributes.startDate}
          </Text>
          <Text className="text-gray-500 text-lg pt-2 italic"> - </Text>
          <Text className="text-gray-500 text-lg pt-2 italic ">
            {selectedMangaData.attributes.endDate
              ? selectedMangaData.attributes.endDate
              : "N/A"}
          </Text>
        </View>
        {/* Synopsis */}
        <View className="p-4">
          <Text className="text-white text-xl mb-2">Synopsis:</Text>
          <Text className="text-white text-xs">
            {selectedMangaData.attributes.synopsis}
          </Text>
        </View>
        {/* Episodes */}
        <View className="p-4">
          <Text className="text-white text-xl mb-2">Chapters:</Text>
          <MangaVolList volume_id={selectedMangaData.id} />
        </View>
        {/* Cast */}
        {/* <View className="p-4">
          <Text className="text-white text-xl mb-2">Characters:</Text>
          <AnimeEpList episode_id={selectedMangaData.id} />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MangaInfo;
