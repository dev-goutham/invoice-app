import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterBy = 'all' | 'due' | 'paid';

const initialState: { filterBy: FilterBy } = {
  filterBy: 'all',
};

const filterBySlice = createSlice({
  name: 'filterBy',
  initialState,
  reducers: {
    changeFilterBy: (state, action: PayloadAction<FilterBy>) => {
      state.filterBy = action.payload;
    },
  },
});

export const { changeFilterBy } = filterBySlice.actions;

export default filterBySlice.reducer;
