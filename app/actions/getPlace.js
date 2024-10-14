"use server";

import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getPlace(id) {
  try {
    const { databases } = await createAdminClient();

    const place = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PLACES,
      id,
    );

    revalidatePath("/", "layout");

    return place;
  } catch (error) {
    console.log("Could not get place.", error);

    redirect("/error");
  }
}

export default getPlace;
