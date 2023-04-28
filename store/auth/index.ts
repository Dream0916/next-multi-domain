/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, LoginUserData } from "./types";
import { parseCookies } from "nookies";

const PREFIX = "Auth";
const cookies = parseCookies();
const initialState: AuthState = {
  otpSent: false,
  username: cookies["username"] === undefined ? "" : cookies["username"],
  email: cookies["email"] === undefined ? "" : cookies["email"],
  phonenumber:
    cookies["phonenumber"] === undefined ? "" : cookies["phonenumber"],
};

export const AuthReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    initOtp(state: AuthState) {
      state.otpSent = false;
    },
    setOtp(state: AuthState) {
      state.otpSent = true;
    },
    setLoginUser(state: AuthState, action: PayloadAction<LoginUserData>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phonenumber = action.payload.phonenumber;
    },
  },
  extraReducers: (builder) => {},
});

export const { initOtp, setOtp, setLoginUser } = AuthReducer.actions;

// export { userRegister };

export default AuthReducer.reducer;
