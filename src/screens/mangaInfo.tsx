import React, { useState } from "react";
import { Text, View, SafeAreaView, Image, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MangaVolList from "../components/manga/mangaVolList";
import {
  addFavoriteManga,
  removeFavoriteManga,
} from "../features/favoriteMangas/favoriteMangaSlice";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const MangaInfo = ({ route }) => {
  const selectedMangaData = route.params.selectedManga;
  const [color, setColor] = useState("gray");
  const dispatch = useDispatch();
  const favoriteState = useSelector((state) => state.favoriteMangas);

  const favoriteAlready = favoriteState.find(
    (favorite) => favorite.id === selectedMangaData.id
  );

  if (favoriteAlready && color === "gray") {
    setColor("red");
    console.log("favoriteAlready");
  }

  const handleFavorite = () => {
    setColor("red");
    dispatch(addFavoriteManga(selectedMangaData));
  };

  const handleUnfavorite = (id: string) => {
    setColor("gray");
    dispatch(removeFavoriteManga(id));
  };

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
        <View className="flex flex-row">
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
          <Pressable
            className="flex-1 flex flex-row justify-end items-center pr-4 w-1/5 self-start"
            onPress={() => {
              if (color == "gray") {
                handleFavorite();
              } else if (color == "red") {
                handleUnfavorite(selectedMangaData.id);
              }
            }}
          >
            <Text>
              <Ionicons name="heart" size={38} color={color} />
            </Text>
          </Pressable>
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
