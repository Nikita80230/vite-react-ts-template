import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialAuthState = {};

const initialAuthState: InitialAuthState = {};

const cartSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const cartReducer = cartSlice.reducer;
