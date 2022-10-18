import {createSlice} from '@reduxjs/toolkit';

export const FavoriteMangaSlice = createSlice({
	  name: 'favoritesMangas',
	  initialState: [],
	  reducers: {
		addFavoriteManga: (state, action) => {
			state.push(action.payload);
		},
		removeFavoriteManga: (state, action) => {
			state.splice(action.payload.id, 1);
	  },
	},
});

export const { addFavoriteManga, removeFavoriteManga } = FavoriteMangaSlice.actions;
export default FavoriteMangaSlice.reducer;
