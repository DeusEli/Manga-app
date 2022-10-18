import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AnimeEpList from "../components/anime/animeEpList";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  route: any;
}

const AnimeInfo = ({ route }: Props) => {
  const selectedAnimeData = route.params.selectedAnime;
  const ytTrailer = selectedAnimeData.attributes.youtubeVideoId;
  const [color, setColor] = useState("gray");
  const dispatch = useDispatch();
  const favoriteState = useSelector((state) => state.favorites);

  const favoriteAlready = favoriteState.find(
    (favorite) => favorite.id === selectedAnimeData.id
  );

  if (favoriteAlready && color === "gray") {
    setColor("red");
  }

  const handleFavorite = () => {
    setColor("red");
    dispatch(addFavorite(selectedAnimeData));
  };

  const handleUnfavorite = (id: string) => {
    setColor("gray");
    dispatch(removeFavorite(id));
  };

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
        <View className="flex flex-row">
          <View className="pl-4">
            <Text className="text-white text-4xl">
              {selectedAnimeData.attributes.canonicalTitle}
            </Text>
            <Text className="text-slate-300 text-2xl pt-2">
              {selectedAnimeData.attributes.titles.ja_jp}
            </Text>
          </View>
          {/* Add to favorites */}
          <Pressable
            className="flex-1 flex flex-row justify-end items-center pr-4"
            onPress={() => {
              if (color == "gray") {
                handleFavorite();
              } else if (color == "red") {
                handleUnfavorite(selectedAnimeData.id);
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
        {/* Youtube Trailer */}
        <View className="p-4">
          {/* <Button
            className="text-white text-xs"
            style={{}}
            title="Watch Trailer on Youtube"
            onPress={() => {
              Linking.openURL("https://www.youtube.com/watch?v=" + ytTrailer);
            }}
          /> */}
          <Pressable
            className="bg-red-900 flex items-center w-52 self-center rounded-2xl p-4"
            onPress={() => {
              Linking.openURL("https://www.youtube.com/watch?v=" + ytTrailer);
            }}
          >
            <Text className="text-white text-xl">Trailer on Youtube</Text>
          </Pressable>
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
