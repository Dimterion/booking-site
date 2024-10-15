"use server";

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";

async function deleteSession() {
  const sessionCookie = cookies().get("appwrite-session");

  if (!sessionCookie) {
    return {
      error: "No session cookie found.",
    };
  }
  try {
    const { account } = await createSessionClient(sessionCookie.value);

    await account.deleteSession("current");

    cookies().delete("appwrite-session");

    return {
      success: true,
    };
  } catch (error) {
    return {
      error: "Session deletion error.",
    };
  }
}

export default deleteSession;
