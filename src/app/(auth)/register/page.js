import React from "react";
import Link from "next/link";
import { register } from "./actions";
import FormComponent from "@/app/lib/components/form/formComponent";
import { formFields } from "@/app/lib/data/userData";

export default function Register() {
  return (
    <main className="mx-3 my-auto md:mx-auto w-fit">
      <h1 className="text-center mb-5 text-4xl">Register</h1>
      <div className="min-w-[350px] md:w-[400px] border border-gray-300 rounded-md shadow-[0px_0px_5px_#ffffffff] p-5">
        <FormComponent
          formFields={formFields}
          submitText="Register"
          buttonClassName="mb-4 w-full px-5 py-2 border-none rounded-md bg-violet-800 text-white cursor-pointer"
          action={register}
        />
        <nav className="flex items-center justify-between">
          <Link href="/login" className="no-underline">
            Already have an account? Log in
          </Link>
        </nav>
      </div>
    </main>
  );
}
