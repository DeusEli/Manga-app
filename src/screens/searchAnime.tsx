import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import AnimeSearchCard from "../components/anime/animeSearchCard";
import { useNavigation } from "@react-navigation/native";

const SearchAnimeScreen = () => {
  const navigation = useNavigation();
  const [anime, setAnime] = useState([]);
  const [filteredAnime, setFilteredAnime] = useState([]);

  const loadAnime = async () => {
    const response = await fetch("https://kitsu.io/api/edge/anime");
    const data = await response.json();
    setAnime(data.data);
  };

  useEffect(() => {
    loadAnime();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      title: "Search queso",
      headerRight: () => (
        <View className="flex flex-row items-center">
          <Text className="text-white pr-4">Buscar</Text>
        </View>
      ),
      headerSearchBarOptions: {
        placeholder: "Search",
        onChangeText: (event) => {
          searchFilterFunction(event.nativeEvent.text);
        },
      },
    });
  }, [navigation]);

  const searchFilterFunction = (text) => {
    if (text.length > 2) {
      const newData = anime.filter((item) => {
        const itemData = item.attributes.canonicalTitle
          ? item.attributes.canonicalTitle.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredAnime(newData);
    } else {
      setFilteredAnime(anime);
    }
  };

  return (
    <View className="flex flex-col items-start pl-1 scroll-pr-10 h-full bg-black">
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
