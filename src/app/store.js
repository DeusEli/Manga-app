import { configureStore } from "@reduxjs/toolkit";
import favoriteAnimeReducer from "../features/favoriteAnimes/favoriteAnimeSlice";
import favoriteMangaReducer from "../features/favoriteMangas/favoriteMangaSlice";

export const store = configureStore({
  reducer: {
    favoriteAnimes: favoriteAnimeReducer,
    favoriteMangas: favoriteMangaReducer,
  },
});
