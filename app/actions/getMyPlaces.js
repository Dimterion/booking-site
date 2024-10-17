"use server";

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { Query } from "node-appwrite";
import { redirect } from "next/navigation";

async function getMyPlaces() {
  const sessionCookie = cookies().get("appwrite-session");

  if (!sessionCookie) {
    redirect("/login");
  }

  try {
    const { account, databases } = await createSessionClient(
      sessionCookie.value,
    );
    const user = await account.get();
    const userId = user.$id;
    const { documents: places } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PLACES,
      [Query.equal("user_id", userId)],
    );

    return places;
  } catch (error) {
    console.log("Could not get user places.", error);

    redirect("/error");
  }
}

export default getMyPlaces;
