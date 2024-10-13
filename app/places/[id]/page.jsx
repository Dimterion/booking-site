import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import Heading from "@/components/Heading";
import places from "@/data/places.json";

const PlacePage = ({ params }) => {
  const { id } = params;
  const place = places.find((place) => place.$id === id);

  if (!place) {
    return <Heading title="Place not found" />;
  }

  return (
    <>
      <Heading title={place.name} />
      <div className="rounded-lg bg-white p-6 shadow">
        <Link
          href="/"
          className="mb-4 flex items-center text-gray-600 hover:text-gray-800"
        >
          <FaChevronLeft className="mr-1 inline" />
          <span className="ml-2">Back to Places</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <Image
            src={`/images/${place.image}`}
            alt={place.name}
            width={400}
            height={100}
            className="h-64 w-full rounded-lg object-cover sm:w-1/3"
          />
          <div className="mt-4 sm:mt-0 sm:flex-1">
            <p className="mb-4 text-gray-600">{place.description}</p>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-gray-800">Size:</span>
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Availability:
                </span>
              </li>
              <li>
                <span className="font-semibold text-gray-800">Price:</span>
              </li>
              <li>
                <span className="font-semibold text-gray-800">Address:</span>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold">Book this place</h2>
          <form className="mt-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="check_in_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-In Date
                </label>
                <input
                  type="date"
                  id="check_in_date"
                  name="check_in_date"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="check_in_time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-In Time
                </label>
                <input
                  type="time"
                  id="check_in_time"
                  name="check_in_time"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="check_out_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-Out Date
                </label>
                <input
                  type="date"
                  id="check_out_date"
                  name="check_out_date"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="check_out_time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-Out Time
                </label>
                <input
                  type="time"
                  id="check_out_time"
                  name="check_out_time"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              >
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PlacePage;
