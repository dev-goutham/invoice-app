import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Theme {
  theme: 'dark' | 'light';
}

const initialState: Theme = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    hyderate: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.theme = action.payload;
    },
    toggle: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('theme', state.theme);
    },
  },
});

export const { hyderate, toggle } = themeSlice.actions;

export default themeSlice.reducer;
