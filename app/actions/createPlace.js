"use server";

import { createAdminClient } from "@/config/appwrite";
import checkAuth from "./checkAuth";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";

async function createPlace(previousState, formData) {
  const { databases } = await createAdminClient();

  try {
    const { user } = await checkAuth();

    if (!user) {
      return {
        error: "You must be logged in to create a place.",
      };
    }

    const newPlace = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PLACES,
      ID.unique(),
      {
        user_id: user.id,
        name: formData.get("name"),
        description: formData.get("description"),
        sq: formData.get("sq"),
        capacity: formData.get("capacity"),
        location: formData.get("location"),
        address: formData.get("address"),
        availability: formData.get("availability"),
        price_per_hour: formData.get("price_per_hour"),
        amenities: formData.get("amenities"),
      },
    );

    revalidatePath("/", "layout");

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);

    const errorMessage = error.response.message || "An error has occured.";

    return {
      error: errorMessage,
    };
  }
}

export default createPlace;