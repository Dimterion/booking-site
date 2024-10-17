import Link from "next/link";
import { FaEye } from "react-icons/fa";
import DeletePlaceBtn from "./DeletePlaceBtn";

const MyPlaceCard = ({ place }) => {
  return (
    <div className="mt-4 flex flex-col items-center justify-between rounded-lg bg-white p-4 shadow sm:flex-row">
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold">{place.name}</h4>
      </div>
      <div className="mt-2 flex w-full flex-col sm:mt-0 sm:w-auto sm:flex-row sm:space-x-2">
        <Link
          href={`/places/${place.$id}`}
          className="mb-2 w-full rounded bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-700 sm:mb-0 sm:w-auto"
        >
          <FaEye className="mr-1 inline" /> View
        </Link>
        <DeletePlaceBtn placeId={place.$id} />
      </div>
    </div>
  );
};

export default MyPlaceCard;
