import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView, TextInput } from "react-native";
import AnimeSearchCard from "../src/components/anime/animeFavCard";

const SearchAnimeScreen = () => {
  //const navigation = useNavigation();
  const [anime, setAnime] = useState([]);

  const loadAnime = async (text: string) => {
    const params = !!text ? `?filter[text]=${text}` : "";
    const response = await fetch("https://kitsu.io/api/edge/anime" + params);
    const data = await response.json();
    setAnime(data.data);
  };

  useEffect(() => {
    loadAnime("");
  }, []);

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLargeTitle: true,
  //     title: "Search",
  //     headerRight: () => (
  //       <View className="flex flex-row items-center">
  //         <Text className="text-white pr-4">Buscar</Text>
  //       </View>
  //     ),
  //     headerSearchBarOptions: {
  //       placeholder: "Search",
  //       onChangeText: (event) => {
  //         searchFilterFunction(event.nativeEvent.text);
  //       },
  //     },
  //   });
  // }, [navigation]);

  const searchFilterFunction = (text: string) => {
    loadAnime(text);
  };

  return (
    <View className="flex flex-col items-start pl-1 scroll-pr-10 h-full bg-black">
      +
      <FlatList
        className="w-full"
        horizontal={false}
        data={anime}
        renderItem={({ item }) => <AnimeSearchCard anime={item} />}
      />
    </View>
    // <ScrollView>
    //   <Text>Search</Text>
    //   {filteredAnime.map((item) => {
    //     return <AnimeSearchCard anime={item} />;
    //   })}
    // </ScrollView>
  );
};

export default SearchAnimeScreen;
