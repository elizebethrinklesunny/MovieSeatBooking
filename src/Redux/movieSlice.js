import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMovie: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSelectedMovie(state, action) {
      state.selectedMovie = action.payload;
    },
  },
});

export const { setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;
