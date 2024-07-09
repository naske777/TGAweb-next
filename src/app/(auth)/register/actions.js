"use server";

import { api } from "@/app/lib/utilities/api";
import { redirect } from "next/navigation";

export async function register(formData) {
  const jsonFromData = Object.fromEntries(formData);

  const response = await api("register", jsonFromData, "POST");

  if (response) redirect("/login");
}
