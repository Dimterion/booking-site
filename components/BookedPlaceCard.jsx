const BookedPlaceCard = ({ booking }) => {
  return (
    <div className="mt-4 flex flex-col items-start justify-between rounded-lg bg-white p-4 shadow sm:flex-row sm:items-center">
      <div>
        <h4 className="text-lg font-semibold">Lorem Ipsum</h4>
        <p className="text-sm text-gray-600">
          <strong>Check in:</strong> Lorem Ipsum
        </p>
        <p className="text-sm text-gray-600">
          <strong>Check out:</strong> Lorem Ipsum
        </p>
      </div>
      <div className="mt-2 flex w-full flex-col sm:mt-0 sm:w-auto sm:flex-row sm:space-x-2">
        <a
          href="/"
          className="mb-2 w-full rounded bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-700 sm:mb-0 sm:w-auto"
        >
          View place
        </a>
        <button
          href="/"
          className="w-full rounded bg-red-500 px-4 py-2 text-center text-white hover:bg-red-700 sm:w-auto"
        >
          Cancel booking
        </button>
      </div>
    </div>
  );
};

export default BookedPlaceCard;
