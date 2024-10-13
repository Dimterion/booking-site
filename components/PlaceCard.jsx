import Image from "next/image";
import Link from "next/link";

const PlaceCard = ({ place }) => {
  return (
    <div className="mt-4 flex flex-col items-start justify-between rounded-lg bg-white p-4 shadow sm:flex-row sm:items-center">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <Image
          src={`/images/${place.image}`}
          width={400}
          height={100}
          alt={place.name}
          className="mb-3 w-full rounded-lg object-cover sm:mb-0 sm:h-32 sm:w-32"
        />
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">{place.name}</h4>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Address: </span>
            {place.address}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Availability: </span>
            {place.availability}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Price: </span>$
            {place.price_per_hour}
          </p>
        </div>
      </div>
      <div className="mt-2 flex w-full flex-col sm:mt-0 sm:w-auto sm:flex-row sm:space-x-2">
        <Link
          href={`/places/${place.$id}`}
          className="mb-2 w-full rounded bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-700 sm:mb-0 sm:w-auto"
        >
          View Place
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
