import { useState } from "react";
import { useRouter } from "next/router";
import { initOtp } from "@/store/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { otpSentStatus } from "@/store/auth/selectors";
import { userLogin, verifyOtp } from "@/store/auth/actions";

export default function SignIn() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [userid, setUserid] = useState("");
  const [otpcode, setOtpcode] = useState("");

  const dispatch = useAppDispatch();
  const otpSent = useAppSelector(otpSentStatus);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const res = await dispatch(userLogin(data));
      if (res !== null) {
        setUserid(res);
      }
    } catch (err) {
      throw new Error(`${err}`);
    }
  };

  const handleSubmitVerifyCode: any = async (event: any) => {
    event.preventDefault();
    try {
      const res = await dispatch(
        verifyOtp({ userid: userid, otpcode: otpcode })
      );
      if (res) {
        router.push("/");
      }
    } catch (err) {
      throw new Error(`${err}`);
    }
  };

  const backToLogin = () => {
    dispatch(initOtp());
    setOtpcode("");
    setData({ email: "", password: "" });
  };
  return (
    <>
      <div className="bg-[#130d37] h-screen py-4 overflow-y-scroll px-4">
        <div className="max-w-md my-0 mx-auto">
          {!otpSent ? (
            <div className="flex flex-col items-center pt-6 border h-[590px] rounded-lg bg-[#ededed]">
              <div>
                <h1 className="text-4xl font-bold mb-6 text-gray-700">Login</h1>
              </div>
              <div className="mt-4 text-[#272727]flex flex-col items-center w-full">
                <h2 className="font-bold text-xl flex justify-center mb-2 text-gray-700">
                  Sign in with email
                </h2>
                <form
                  className="flex flex-col items-center w-full px-4"
                  onSubmit={handleSubmit}
                >
                  <input
                    placeholder="email adddress"
                    className="mt-2 px-2 py-2 w-full max-w-[330px] text-gray-700 bg-[#ededed] border rounded-md border-[#6b6b6b] focus:outline-[#350ef7]"
                    type="text"
                    value={data.email}
                    onChange={(e) =>
                      setData({
                        ...data,
                        email: e.target.value,
                      })
                    }
                  />
                  <input
                    placeholder="password"
                    className="mt-2 px-2 py-2 w-full max-w-[330px] text-gray-700 bg-[#ededed] border rounded-md border-[#6b6b6b] focus:outline-[#350ef7] relative"
                    type="password"
                    value={data.password}
                    onChange={(e) =>
                      setData({
                        ...data,
                        password: e.target.value,
                      })
                    }
                  />
                  <button className="px-4 md:px-12 py-2 mt-4 w-full max-w-[330px] text-white border border-solid border-[#01b4e4] bg-[#01b4e4]  hover:bg-[#0099c3] transition duration-700 ease-in-out rounded-lg cursor-pointer">
                    Sign In
                  </button>
                  <div className="mt-3">
                    <p>
                      Need an Account ?{" "}
                      <span
                        className="cursor-pointer"
                        onClick={() => router.push("/auth/register")}
                      >
                        Register here
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center pt-6 border h-[590px] rounded-lg bg-[#ededed]">
              <div>
                <h1 className="text-4xl font-bold mb-6 text-gray-700">Login</h1>
              </div>
              <div className="mt-4 text-[#272727]flex flex-col items-center w-full">
                <h2 className="font-bold text-xl flex justify-center mb-2 text-gray-700">
                  Sign in with verify code
                </h2>
                <form
                  className="flex flex-col items-center w-full px-4"
                  onSubmit={handleSubmitVerifyCode}
                >
                  <input
                    placeholder="verify code"
                    className="mt-2 px-2 py-2 w-full max-w-[330px] text-gray-700 bg-[#ededed] border rounded-md border-[#6b6b6b] focus:outline-[#350ef7] relative"
                    value={otpcode}
                    type="text"
                    onChange={(e) => setOtpcode(e.target.value)}
                  />
                  <button className="px-4 md:px-12 py-2 mt-4 w-full max-w-[330px] text-white border border-solid border-[#01b4e4] bg-[#01b4e4]  hover:bg-[#0099c3] transition duration-700 ease-in-out rounded-lg cursor-pointer">
                    Verify
                  </button>
                  <div className="mt-3">
                    <p>
                      <span
                        className="cursor-pointer"
                        onClick={() => backToLogin()}
                      >
                        Back
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
