import React from "react";
import Link from "next/link";
import { authenticate } from "./actions";
import { formFields } from "./data";
import FormComponent from "@/app/lib/components/form/formComponent";

export default function Login() {
  return (
    <main className="mx-3 my-auto md:mx-auto w-fit">
      <h1 className="text-center mb-5 text-4xl">Login</h1>
      <div className="min-w-[350px] md:w-[400px] border border-gray-300 rounded-md shadow-[0px_0px_5px_#ffffffff] p-5">
      <FormComponent
        formFields={formFields}
        submitText="Log in"
        buttonClassName="mb-4 w-full px-5 py-2 border-none rounded-md bg-violet-800 text-white cursor-pointer"
        action={authenticate}
      />
      <nav className="flex items-center justify-between mt-2">
        <Link href="/forgot" className="no-underline">
          Forgot your password?
        </Link>
        <Link href="/register" className="text-lg no-underline">
          Create Account
        </Link>
      </nav>
      </div>
    </main>
  );
}
