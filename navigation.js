import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
//screens
import FavoritesScreen from "./src/screens/favorites";
import AnimeInfo from "./src/screens/animeInfo";
import MangaInfo from "./src/screens/mangaInfo";
import HomeScreen from "./src/screens/home";

const infoStackNavigator = createNativeStackNavigator();

function MyHomeStack() {
  return (
    <infoStackNavigator.Navigator>
      <infoStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <infoStackNavigator.Screen
        name="AnimeInfo"
        component={AnimeInfo}
        options={{ headerShown: false }}
      />
      <infoStackNavigator.Screen
        name="MangaInfo"
        component={MangaInfo}
        options={{ headerShown: false }}
      />
    </infoStackNavigator.Navigator>
  );
}

function MyFavStack() {
  return (
    <infoStackNavigator.Navigator>
      <infoStackNavigator.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <infoStackNavigator.Screen
        name="AnimeInfo"
        component={AnimeInfo}
        options={{ headerShown: false }}
      />
      <infoStackNavigator.Screen
        name="MangaInfo"
        component={MangaInfo}
        options={{ headerShown: false }}
      />
    </infoStackNavigator.Navigator>
  );
}

const tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ tabBarActiveTintColor: "purple" }}
    >
      <tab.Screen
        name="HomeScreen"
        component={MyHomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <tab.Screen
        name="FavoritesScreen"
        component={MyFavStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
          headerShown: false,
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
