interface AuthState {
  otpSent: boolean;
  username: string;
  email: string;
  phonenumber: string;
}

interface LoginUserData {
  username: string;
  email: string;
  phonenumber: string;
}

type RegisterData = {
  username: string;
  email: string;
  phonenumber: string;
  password: string;
};

type LoginData = {
  email: string;
  password: string;
};

type OtpData = {
  userid: string;
  otpcode: string;
};

export type { AuthState, RegisterData, LoginData, OtpData, LoginUserData };
