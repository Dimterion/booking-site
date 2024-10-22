"use client";

import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import deletePlace from "@/app/actions/deletePlace";

const DeletePlaceBtn = ({ placeId }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this place?",
    );

    if (confirmed) {
      try {
        const response = await deletePlace(placeId);

        toast.success("Place deleted successfully.");
      } catch (error) {
        console.log("Could not delete place.", error);

        toast.error("Could not delete place.");
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="mb-2 flex w-full min-w-28 items-center justify-center gap-1 rounded bg-red-800 px-4 py-2 text-center text-white transition-colors hover:bg-red-900 sm:mb-0 sm:w-auto"
    >
      <FaTrash className="mr-1 inline" />
      Delete
    </button>
  );
};

export default DeletePlaceBtn;
