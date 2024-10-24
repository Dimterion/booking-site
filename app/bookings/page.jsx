import Heading from "@/components/Heading";
import BookedPlaceCard from "@/components/BookedPlaceCard";
import getMyBookings from "../actions/getMyBookings";

const BookingsPage = async () => {
  const bookings = await getMyBookings();

  return (
    <>
      <Heading title="My bookings" number={bookings.length} />
      {bookings.length === 0 ? (
        <p className="mt-6 text-center text-lg text-gray-600">
          You have no bookings at the moment.
        </p>
      ) : (
        bookings.map((booking) => (
          <BookedPlaceCard key={booking.$id} booking={booking} />
        ))
      )}
    </>
  );
};

export default BookingsPage;
