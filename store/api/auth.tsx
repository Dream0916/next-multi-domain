import { REQUEST_API_URL } from "@/config";
import { RegisterData, LoginData, OtpData } from "../auth/types";
import axios from "axios";

export const userRegisterRequest = async (data: RegisterData) => {
  return axios.post(`${REQUEST_API_URL}/signup`, data);
};

export const userLoginRequest = async (data: LoginData) => {
  return axios.post(`${REQUEST_API_URL}/signin`, data);
};

export const userOtpRequest = async (data: OtpData) => {
  return axios.post(`${REQUEST_API_URL}/otpverify`, data);
};
