import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import Heading from "@/components/Heading";
import BookingForm from "@/components/BookingForm";
import getPlace from "@/app/actions/getPlace";

const PlacePage = async ({ params }) => {
  const { id } = params;
  const place = await getPlace(id);

  if (!place) {
    return <Heading title="Place not found" />;
  }

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_PLACES;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${place.image}/view?project=${projectId}`;
  const imageSrc = place.image ? imageUrl : "/images/placeholder_img.jpg";

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
            src={imageSrc}
            alt={place.name}
            width={400}
            height={100}
            className="h-64 w-full rounded-lg object-cover sm:w-1/3"
          />
          <div className="mt-4 sm:mt-0 sm:flex-1">
            <p className="mb-4 text-gray-600">{place.description}</p>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-gray-800">Size: </span>
                {place.sq}
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Availability:{" "}
                </span>
                {place.availability}
              </li>
              <li>
                <span className="font-semibold text-gray-800">Price: </span>$
                {place.price_per_hour}
              </li>
              <li>
                <span className="font-semibold text-gray-800">Address: </span>
                {place.address}
              </li>
            </ul>
          </div>
        </div>
        <BookingForm place={place} />
      </div>
    </>
  );
};

export default PlacePage;
