import Heading from "@/components/Heading";
import BookedPlaceCard from "@/components/BookedPlaceCard";
import getMyBookings from "../actions/getMyBookings";

const BookingsPage = async () => {
  const bookings = await getMyBookings();

  return (
    <>
      <Heading title="My bookings" number={bookings.length} />
      {bookings.length === 0 ? (
        <p className="mt-4 text-gray-600">You have no bookings.</p>
      ) : (
        bookings.map((booking) => (
          <BookedPlaceCard key={booking.$id} booking={booking} />
        ))
      )}
    </>
  );
};

export default BookingsPage;
