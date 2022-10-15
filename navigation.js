import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
//screens
import Home from "./src/screens/home";
import SearchAnimeScreen from "./src/screens/searchAnime";
import SearchMangaScreen from "./src/screens/searchManga";
import FavoritesScreen from "./src/screens/favorites";

const tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "purple" }}
    >
      <tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="Search Anime"
        component={SearchAnimeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="Search Manga"
        component={SearchMangaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
