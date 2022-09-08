import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import themeReducer from './features/theme';
import authReducer from './features/auth';
import invoiceApi from './api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import filterByReducer from './features/filterBy';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    filterBy: filterByReducer,
    [invoiceApi.reducerPath]: invoiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(invoiceApi.middleware),
});

setupListeners(store.dispatch);

export default store;

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
