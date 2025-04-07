import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  isOpenSidebar: boolean;
  theme: 'light' | 'dark';
}

const themeType: string | null = localStorage.getItem('theme');

const initialState: AppState = {
  isOpenSidebar: false,
  theme: (themeType as 'light' | 'dark') ?? 'light',
};

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    changeIsOpenSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar as boolean;
    },
    changeTheme: (state, action) => {
      localStorage.setItem('theme', action.payload);
      state.theme = action.payload as 'light' | 'dark';
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeIsOpenSidebar, changeTheme } = appSlice.actions;
export const appReducer = appSlice.reducer;
