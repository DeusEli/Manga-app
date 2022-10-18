import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, View, FlatList } from "react-native";
import AnimeCard from "../components/anime/animeCard";
import MangaCard from "../components/manga/mangaCard";

const HomeScreen = () => {
  const [manga, setManga] = useState([]);
  const [anime, setAnime] = useState([]);

  const loadAnime = async (text: string) => {
    const params = !!text ? `?filter[text]=${text}` : "";
    const response = await fetch("https://kitsu.io/api/edge/anime" + params);
    const data = await response.json();
    setAnime(data.data);
  };

  const loadManga = async (text: string) => {
    const params = !!text ? `?filter[text]=${text}` : "";
    const response = await fetch("https://kitsu.io/api/edge/manga" + params);
    const data = await response.json();
    console.log(params);
    setManga(data.data);
  };

  useEffect(() => {
    loadManga("");
    loadAnime("");
  }, []);

  const searchFilterFunction = (text: string) => {
    loadManga(text);
    loadAnime(text);
  };

  return (
    <SafeAreaView className="flex-col pt-2 h-full bg-black">
      <View className="flex flex-row">
        <Text className="text-white">Search</Text>
        <TextInput
          className="border border-white flex-1 ml-2 text-white"
          onChangeText={(text) => searchFilterFunction(text)}
          placeholder="Search"
        ></TextInput>
      </View>
      <View className="flex flex-col items-center">
        <Text className="text-white text-2xl pb-4">ANIMES</Text>
        <FlatList
          horizontal={true}
          data={anime}
          renderItem={({ item }) => <AnimeCard anime={item} />}
        />
      </View>
      <View className="flex flex-col items-center mt-4">
        <Text className="text-white text-2xl mb-4">MANGAS</Text>
        <FlatList
          horizontal={true}
          data={manga}
          renderItem={({ item }) => <MangaCard manga={item} />}
        />
      </View>
      {/* <AnimeList />
      <MangaList txt={filter} /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
