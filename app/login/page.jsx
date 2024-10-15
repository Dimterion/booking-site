"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import createSession from "../actions/createSession";

const LoginPage = () => {
  const [state, formAction] = useFormState(createSession, {});

  useEffect(() => {
    if (state.error) console.log(state.error);
  }, [state]);

  return (
    <div className="flex items-center justify-center">
      <div className="mt-20 w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <form action={formAction}>
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
            Login
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Login
            </button>
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-blue-500">
                Register
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
