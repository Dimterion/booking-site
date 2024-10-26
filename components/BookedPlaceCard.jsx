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
    <section className="mt-4 flex flex-col items-start justify-between rounded-md bg-gray-50 p-4 shadow sm:flex-row sm:items-center">
      <article>
        <h2 className="mb-2 text-lg font-semibold">{place.name}</h2>
        <p className="mb-1 text-sm text-gray-600">
          <strong>Check in:</strong> {formatDate(booking.check_in)}
        </p>
        <p className="mb-1 text-sm text-gray-600">
          <strong>Check out:</strong> {formatDate(booking.check_out)}
        </p>
      </article>
      <article className="mt-2 flex w-full flex-col sm:mt-0 sm:w-auto sm:flex-row sm:space-x-2">
        <Link
          href={`/places/${place.$id}`}
          className="mb-2 flex w-full min-w-40 items-center justify-center gap-2 rounded-md bg-blue-800 px-4 py-2 text-center text-white transition-colors hover:bg-blue-950 sm:mb-0 sm:w-auto"
        >
          View place
        </Link>
        <CancelBookingBtn bookingId={booking.$id} />
      </article>
    </section>
  );
};

export default BookedPlaceCard;
