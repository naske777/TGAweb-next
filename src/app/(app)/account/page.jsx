import { api } from "@/app/lib/utilities/api";
import { cookies } from "next/headers";
import AccountForm from "./components/accountForm";

export default async function Account() {
  const id = cookies().get("id");
  const user = await api(`user/${id}`);
  console.log(user);
  return <AccountForm user={user} />;
}
