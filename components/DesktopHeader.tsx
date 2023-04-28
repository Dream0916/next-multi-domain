import { FC, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { clearCookie } from "@/util";

const DesktopHeader = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const router = useRouter();
  const cookies = parseCookies();

  const handleAuth = () => {
    if (userIsLoggedIn) {
      clearCookie();
      router.push("/");
    } else {
      router.push("/auth/signin");
    }
  };

  const handleLink = (link: string) => {
    router.push(link);
  };

  const isLoggedIn = useCallback(() => {
    if (cookies.accessToken) {
      setUserIsLoggedIn(true);
    } else {
      setUserIsLoggedIn(false);
    }
  }, [cookies.accessToken]);

  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  return (
    <>
      <div className="flex justify-between items-center py-2 text-white px-6">
        <div className="hidden md:flex">
          <Image
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
            alt="tmdb logo"
            width={300}
            height={50}
          />
        </div>
        <div>
          <button
            onClick={() => handleLink("/theater")}
            className="px-12 py-2 m-2 border border-solid border-[#01b4e4] bg-[#01b4e4]  hover:bg-[#0099c3] transition duration-700 ease-in-out rounded-lg cursor-pointer"
          >
            {"Theater"}
          </button>
          <button
            onClick={() => handleAuth()}
            className="px-12 py-2 my-2 border border-solid border-[#01b4e4] bg-[#01b4e4]  hover:bg-[#0099c3] transition duration-700 ease-in-out rounded-lg cursor-pointer"
          >
            {userIsLoggedIn ? "Sing Out" : "Sign In"}
          </button>
        </div>
      </div>
    </>
  );
};

export default DesktopHeader;
