import {createSlice} from '@reduxjs/toolkit';

export const FavoriteSlice = createSlice({
	  name: 'favorites',
	  initialState: [],
	  reducers: {
		addFavorite: (state, action) => {
			state.push(action.payload);
		},
		removeFavorite: (state, action) => {
			const favoriteFound = state.find(favorite => favorite.id === action.payload.id);
			if (favoriteFound) {
			} else {
				console.log('Favorite not found');
			}
			state.splice(action.payload.id, 1);
	  },
	},
});

export const { addFavorite, removeFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
