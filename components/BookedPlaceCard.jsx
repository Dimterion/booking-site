import Link from "next/link";
import CancelBookingBtn from "./CancelBookingBtn";

const BookedPlaceCard = ({ booking }) => {
  const { place_id: place } = booking;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short" };
    const month = date.toLocaleString("en-US", options, { timeZone: "UTC" });
    const day = date.getUTCDate();
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };

    const time = date.toLocaleString("en-US", timeOptions);

    return `${month} ${day} at ${time}`;
  };

  return (
    <div className="mt-4 flex flex-col items-start justify-between rounded-lg bg-white p-4 shadow sm:flex-row sm:items-center">
      <div>
        <h4 className="text-lg font-semibold">{place.name}</h4>
        <p className="text-sm text-gray-600">
          <strong>Check in:</strong> {formatDate(booking.check_in)}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Check out:</strong> {formatDate(booking.check_out)}
        </p>
      </div>
      <div className="mt-2 flex w-full flex-col sm:mt-0 sm:w-auto sm:flex-row sm:space-x-2">
        <Link
          href={`/places/${place.$id}`}
          className="mb-2 w-full rounded bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-700 sm:mb-0 sm:w-auto"
        >
          View place
        </Link>
        <CancelBookingBtn bookingId={booking.$id} />
      </div>
    </div>
  );
};

export default BookedPlaceCard;
