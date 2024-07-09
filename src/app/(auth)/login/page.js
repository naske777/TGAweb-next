"use client";
import React from "react";
import Link from "next/link";
import { SubmitButton } from "@/app/lib/components/buttons/SubmitButton";
import { authenticate } from "./actions";

export default function Login() {

  return (
    <main className=" mx-3 my-auto md:mx-auto w-fit ">
      <h1 className="text-center mb-5 text-4xl">Login</h1>
      <form
        className="min-w-[350px] md:w-[400px] border border-gray-300 rounded-md shadow-[0px_0px_5px_#ffffffff] p-5"
        action={authenticate}
      >
        <label htmlFor="username" className="block mb-2 ">
          Username
        </label>
        <input
          placeholder="Enter your username"
          type="text"
          id="username"
          name="username"
          required
          className=" mb-3 w-full p-2 border border-gray-300 rounded-md bg-transparent"
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
          className="mb-5 w-full p-2 border border-gray-300 bg-transparent rounded-md"
        />
        <SubmitButton className={"mb-4 w-full px-5 py-2 border-none rounded-md bg-violet-800 text-white cursor-pointer"} text={"Log in"}/>
        
        <button
          type="submit"
          className="mb-4 w-full px-5 py-2 border-none rounded-md bg-violet-800 text-white cursor-pointer"
        >
          Sign in with google
        </button>
        <nav className="flex items-center justify-between">
          <Link href="/forgot" className="  no-underlin">
            Forgot your password ?
          </Link>
          <Link href="/register" className="   text-lg no-underlin">
            Create Account
          </Link>
        </nav>
      </form>
    </main>
  );
}
