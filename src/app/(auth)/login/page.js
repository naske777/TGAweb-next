import React from "react";
import { authenticate } from "@/app/lib/actions";

export default function Login() {
  return (
    <main className=" m-auto w-fit p-5 border border-gray-300 rounded shadow-md">
      <h1 className="text-center">Login</h1>
      <form action={authenticate}>
        <fieldset className="space-y-2 mb-5">
          <legend className="sr-only">Login information</legend>
          <div>
            <label htmlFor="username" className="block mb-1 ">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full p-2 border border-gray-300 rounded bg-transparent"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full p-2 border border-gray-300 bg-transparent rounded"
            />
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full px-5 py-2 border-none rounded bg-blue-500 text-white cursor-pointer"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
