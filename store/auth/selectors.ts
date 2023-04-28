import type { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type
export const otpSentStatus = (state: RootState) => state.auth.otpSent;
export const loginUserInfo = (state: RootState) => ({
  username: state.auth.username,
  email: state.auth.email,
  phonenumber: state.auth.phonenumber,
});
