import {createSlice} from '@reduxjs/toolkit';

export const FavoriteAnimeSlice = createSlice({
	  name: 'favoritesAnimes',
	  initialState: [],
	  reducers: {
		addFavoriteAnime: (state, action) => {
			state.push(action.payload);
		},
		removeFavoriteAnime: (state, action) => {
			state.splice(action.payload.id, 1);
	  },
	},
});

export const { addFavoriteAnime, removeFavoriteAnime } = FavoriteAnimeSlice.actions;
export default FavoriteAnimeSlice.reducer;
