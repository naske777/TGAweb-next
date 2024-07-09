"use server";
import { api } from "@/app/lib/utilities/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function authenticate(formData) {
  try {
    const res = await signIn("credentials", formData);
    const {access} = res;
    if (!access) throw new Error("CredentialsSignin");
    //Falta la encriptacion de la cookie
    cookies().set("token", access, {
      httpOnly: false,
      secure: false,
      maxAge: 60 * 60 * 24, // One day
      path: "/",
    });
  } catch (error) {
    if (error) {
      const errorMessages = {
        CredentialsSignin: "Invalid credentials.",
        default: "Something went wrong.",
      };
      return errorMessages[error.type] || errorMessages["default"];
    }
    throw error;
  }

  redirect("/");
}

async function signIn(method, formData) {
  // Simulate checking the method for demonstration purposes
  if (method !== "credentials") {
    throw {
      type: "MethodNotSupported",
      message: "Authentication method not supported.",
    };
  }

  const jsonFromData = Object.fromEntries(formData);
  
  return await api("login", jsonFromData, "POST");
  

}


