"use server";
import { cookies } from "next/headers";

export async function authenticate(_currentState, formData) {
  try {
    console.log("detected");
    const res = await signIn("credentials", formData);
    //Falta la encriptacion de la cookie
    cookies().set("session", res, {
      httpOnly: false,
      secure: false,
      maxAge: 60 * 60 * 24 , // One day
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
}

async function signIn(method, formData) {
  // Simulate checking the method for demonstration purposes
  if (method !== "credentials") {
    throw {
      type: "MethodNotSupported",
      message: "Authentication method not supported.",
    };
  }

  // Simulate a delay to mimic an async operation such as a database call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Check if the formData contains the valid username and password
  if (formData.email === "admin@admin" && formData.password === "admin") {
    console.log("User authenticated.");
    return { status: "success", message: "User authenticated." };
  } else {
    // If the credentials are invalid, throw an error with a type that can be caught and handled
    throw {
      type: "CredentialsSignin",
      message: "Invalid credentials provided.",
    };
  }
}
