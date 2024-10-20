import Link from "next/link";
import { FaEye } from "react-icons/fa";
import DeletePlaceBtn from "./DeletePlaceBtn";

const MyPlaceCard = ({ place }) => {
  return (
    <section className="mt-4 flex flex-col items-center justify-between rounded-lg bg-white p-4 shadow sm:flex-row">
      <h2 className="text-lg font-semibold">{place.name}</h2>
      <section className="mt-2 flex w-full flex-col sm:mt-0 sm:w-auto sm:flex-row sm:space-x-2">
        <Link
          href={`/places/${place.$id}`}
          className="mb-2 flex w-full min-w-28 items-center justify-center gap-1 rounded bg-blue-800 px-4 py-2 text-center text-white hover:bg-blue-950 sm:mb-0 sm:w-auto"
        >
          <FaEye className="mr-1 inline" />
          View
        </Link>
        <DeletePlaceBtn placeId={place.$id} />
      </section>
    </section>
  );
};

export default MyPlaceCard;
