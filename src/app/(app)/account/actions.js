"use server";

import { api } from "@/app/lib/utilities/api";
import { redirect } from "next/navigation";

export async function updateAccount(formData) {
  const jsonFromData = Object.fromEntries(formData);

  const response = await api("user", jsonFromData, "POST");

  if (response) redirect("/login");
}
