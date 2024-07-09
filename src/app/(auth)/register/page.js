import React from "react";
import { register } from "./actions";
import Link from "next/link";

export default function Register() {
  return (
    <main className=" mx-3 my-auto md:mx-auto w-fit ">
      <h1 className="text-center mb-5 text-4xl">Register</h1>
      <form
        className=" min-w-[350px]  md:w-[400px] border border-gray-300 rounded-md shadow-[0px_0px_5px_#ffffffff] p-5"
        action={register}
      >
        <label htmlFor="username" className="block mb-2">
          Username
        </label>
        <input
          placeholder="Enter your username"
          type="text"
          id="username"
          name="username"
          required
          className="mb-3 w-full p-2 border border-gray-300 rounded-md bg-transparent"
        />

        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          placeholder="Enter your email"
          type="email"
          id="email"
          name="email"
          required
          className="mb-3 w-full p-2 border border-gray-300 rounded-md bg-transparent"
        />

        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <input
          placeholder="Enter your password"
          type="password"
          id="password"
          name="password"
          required
          className="mb-3 w-full p-2 border border-gray-300 bg-transparent rounded-md"
        />

        <label htmlFor="confirm-password" className="block mb-2">
          Confirm Password
        </label>
        <input
          placeholder="Confirm your password"
          type="password"
          id="confirm-password"
          name="confirmPassword"
          required
          className="mb-5 w-full p-2 border border-gray-300 bg-transparent rounded-md"
        />

        <button
          type="submit"
          className="mb-4 w-full px-5 py-2 border-none rounded-md bg-violet-800 text-white cursor-pointer"
        >
          Register      
        </button>
        <nav className="flex items-center justify-between">
          <Link href="/login" className="no-underline">
            Already have an account? Log in
          </Link>
        </nav>
      </form>
    </main>
  );
}
