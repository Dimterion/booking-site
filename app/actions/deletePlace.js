"use server";

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { Query } from "node-appwrite";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

async function deletePlace(placeId) {
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
    const placeToDelete = places.find((place) => place.$id === placeId);

    if (placeToDelete) {
      await databases.deleteDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PLACES,
        placeToDelete.$id,
      );

      revalidatePath("/places/my", "layout");
      revalidatePath("/", "layout");

      return {
        success: true,
      };
    } else {
      return {
        error: "Place not found.",
      };
    }
  } catch (error) {
    console.log("Could not delete place.", error);

    return {
      error: "Could not delete place.",
    };
  }
}

export default deletePlace;
