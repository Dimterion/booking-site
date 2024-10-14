"use server";

import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllPlaces() {
  try {
    const { databases } = await createAdminClient();

    const { documents: places } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PLACES,
    );

    revalidatePath("/", "layout");

    return places;
  } catch (error) {
    console.log("Could not get places.", error);

    redirect("/error");
  }
}

export default getAllPlaces;
