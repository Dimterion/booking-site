"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import createUser from "@/app/actions/createUser";
import Link from "next/link";

const RegisterPage = () => {
  const [state, formAction] = useFormState(createUser, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("You can now log in.");

      router.push("/login");
    }
  }, [state, router]);

  return (
    <div className="flex items-center justify-center">
      <div className="mt-20 w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <form action={formAction}>
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
            Register
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>
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
          <div className="mb-4">
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
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="mb-2 block font-bold text-gray-700"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="rounded bg-blue-800 px-4 py-2 text-white transition-colors hover:bg-blue-950"
            >
              Register
            </button>
            <p>
              Have an account?{" "}
              <Link href="/login" className="text-blue-600">
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
