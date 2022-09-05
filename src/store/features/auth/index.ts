import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@auth0/auth0-react';

interface Auth {
  user: User | null;
  accessToken: string | null;
}

const initialState: Auth = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    hydrate: (state, action: PayloadAction<Auth>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { hydrate } = authSlice.actions;

export default authSlice.reducer;
