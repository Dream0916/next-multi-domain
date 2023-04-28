import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks";
import { userRegister } from "@/store/auth/actions";

export default function Register<ApiResponse>() {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const res = await dispatch(userRegister(data));
      if (res) {
        router.push("/auth/signin");
      }
    } catch (err) {
      throw new Error(`${err}`);
    }
  };

  return (
    <>
      <div className="bg-[#130d37] h-screen py-4 overflow-y-scroll px-4">
        <div className="max-w-md my-0 mx-auto">
          <div className="flex flex-col items-center pt-6 border h-[590px] rounded-lg bg-[#ededed]">
            <div>
              <h1 className="text-4xl font-bold mb-6 text-gray-700">
                Register
              </h1>
            </div>
            <div className="mt-4 text-[#272727]flex flex-col items-center w-full">
              <h2 className="font-bold text-xl flex justify-center mb-2 text-gray-700">
                Register with email
              </h2>
              <form
                className="flex flex-col items-center w-full px-4"
                onSubmit={handleSubmit}
              >
                <input
                  placeholder="username"
                  className="mt-4 px-2 py-2 w-full max-w-[330px] text-gray-700 bg-[#ededed] border rounded-md border-[#6b6b6b] focus:outline-[#350ef7]"
                  type="text"
                  onChange={(e) =>
                    setData({
                      ...data,
                      username: e.target.value,
                    })
                  }
                />
                <input
                  placeholder="email adddress"
                  className="mt-2 px-2 py-2 w-full max-w-[330px] text-gray-700 bg-[#ededed] border rounded-md border-[#6b6b6b] focus:outline-[#350ef7]"
                  type="email"
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  placeholder="phone number"
                  className="mt-2 px-2 py-2 w-full max-w-[330px] text-gray-700 bg-[#ededed] border rounded-md border-[#6b6b6b] focus:outline-[#350ef7]"
                  type="phonenumber"
                  onChange={(e) =>
                    setData({
                      ...data,
                      phonenumber: e.target.value,
                    })
                  }
                />
                <input
                  placeholder="password"
                  className="mt-2 px-2 py-2 w-full max-w-[330px] text-gray-700 bg-[#ededed] border rounded-md border-[#6b6b6b] focus:outline-[#350ef7] relative"
                  type="password"
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                />
                <button className="px-4 md:px-12 py-2 mt-4 w-full max-w-[330px] text-white border border-solid border-[#01b4e4] bg-[#01b4e4]  hover:bg-[#0099c3] transition duration-700 ease-in-out rounded-lg cursor-pointer">
                  Sign Up
                </button>
                <div className="mt-3">
                  <p>
                    Have an Account ?{" "}
                    <span
                      className="cursor-pointer"
                      onClick={() => router.push("/auth/signin")}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
