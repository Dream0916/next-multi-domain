import { destroyCookie } from "nookies";

export const clearCookie = () => {
  destroyCookie(null, "accessToken");
  destroyCookie(null, "email");
  destroyCookie(null, "username");
  destroyCookie(null, "phonenumber");
};
