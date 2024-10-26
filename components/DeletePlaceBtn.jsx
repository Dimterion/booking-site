"use client";

import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import deletePlace from "@/app/actions/deletePlace";

const DeletePlaceBtn = ({ placeId }) => {
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this place?")) {
      return;
    }

    try {
      const result = await deletePlace(placeId);

      if (result.success) {
        toast.success("Place deleted successfully.");
      }
    } catch (error) {
      console.log("Could not delete place.", error);

      toast.error("Could not delete place.");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="mb-2 flex w-full min-w-40 items-center justify-center gap-2 rounded-md bg-red-800 px-4 py-2 text-center text-white transition-colors hover:bg-red-900 sm:mb-0 sm:w-auto"
    >
      <FaTrash />
      Delete
    </button>
  );
};

export default DeletePlaceBtn;
