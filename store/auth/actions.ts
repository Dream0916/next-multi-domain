import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCookie } from "nookies";
import {
  userRegisterRequest,
  userLoginRequest,
  userOtpRequest,
} from "../api/auth";
import { RegisterData, LoginData, OtpData, LoginUserData } from "./types";
import { setOtp, setLoginUser } from ".";
import { showAlert } from "../alert";

const userRegister = (data: RegisterData) => async (dispatch: any) => {
  try {
    const response: any = await userRegisterRequest(data);
    if (response.data.status === 200) {
      dispatch(
        showAlert({ message: response.data.message, severity: "success" })
      );
      return true;
    } else {
      dispatch(
        showAlert({ message: response.data.message, severity: "error" })
      );
      return false;
    }
  } catch (error) {
    return false;
  }
};

const verifyOtp = (data: OtpData) => async (dispatch: any) => {
  try {
    const response: any = await userOtpRequest(data);
    if (response.data.status === 200) {
      const res = response.data.data;
      if (typeof window !== "undefined") {
        setCookie(null, "username", res.username, {
          maxAge: 1 * 24 * 60 * 60,
          path: "/",
        });
        setCookie(null, "email", res.email, {
          maxAge: 1 * 24 * 60 * 60,
          path: "/",
        });
        setCookie(null, "phonenumber", res.phonenumber, {
          maxAge: 1 * 24 * 60 * 60,
          path: "/",
        });
        setCookie(null, "accessToken", res.accessToken, {
          maxAge: 1 * 24 * 60 * 60,
          path: "/",
        });
      }
      const userinfo: LoginUserData = {
        username: res.username,
        email: res.email,
        phonenumber: res.phonenumber,
      };
      dispatch(setLoginUser(userinfo));
      return true;
    } else {
      return false;
    }
  } catch (error) {}
};

const userLogin = (data: LoginData) => async (dispatch: any) => {
  try {
    const response: any = await userLoginRequest(data);
    if (response.data.status === 200) {
      let userid = response.data.data.userid;
      dispatch(setOtp());
      return userid;
    } else {
      dispatch(
        showAlert({ message: response.data.message, severity: "error" })
      );
      return null;
    }
  } catch (error) {}
};

export { userRegister, userLogin, verifyOtp };
