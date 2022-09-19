import React, { useContext } from "react";
import Link from "next/link";
import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

const Auth = () => {
  const { username, setUsername, secret, setSecret, theme } =
    useContext(Context);
  console.log(username, secret);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": process.env.NEXT_PUBLIC_PRIVATE_KEY } }
      )

      .then((r) => {
        router.push("/chats");
      });
  }
  return (
    <section className="h-screen" data-theme={theme}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <Link href="/">
          <a className="flex items-center mb-6 text-2xl font-semibold  ">
            ChatAppByAshish
          </a>
        </Link>{" "}
        <div className="w-full  rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => onSubmit(e)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border  sm:text-sm rounded-lg block w-full p-2.5  text-black "
                  placeholder="name@company.com"
                  onChange={(e) => setUsername(e.target.value)}
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium  "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => setSecret(e.target.value)}
                  className=" border border-gray-300  sm:text-sm rounded-lg text-black  block w-full p-2.5   "
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center btn  "
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
