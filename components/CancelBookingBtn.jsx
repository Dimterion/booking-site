"use client";

import { toast } from "react-toastify";
import cancelBooking from "@/app/actions/cancelBooking";

const CancelBookingBtn = ({ bookingId }) => {
  const handleCancel = async () => {
    if (!confirm("Are you sure you want to cancel this booking?")) {
      return;
    }

    try {
      const result = await cancelBooking(bookingId);

      if (result.success) {
        toast.success("Booking cancelled successfully.");
      }
    } catch (error) {
      console.log("Could not cancel booking.", error);

      return {
        error: "Could not cancel booking.",
      };
    }
  };

  return (
    <button
      onClick={handleCancel}
      className="mb-2 flex w-full min-w-40 items-center justify-center gap-2 rounded-md bg-red-800 px-4 py-2 text-center text-white transition-colors hover:bg-red-900 sm:mb-0 sm:w-auto"
    >
      Cancel booking
    </button>
  );
};

export default CancelBookingBtn;
