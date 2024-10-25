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
      <section className="rounded-lg bg-gray-50 p-6 shadow">
        <Link
          href="/"
          className="mb-4 flex items-center text-gray-600 transition-colors hover:text-gray-800"
        >
          <FaChevronLeft className="mr-1 inline" />
          <span>Back to all places</span>
        </Link>
        <section className="flex flex-col sm:flex-row sm:space-x-6">
          <Image
            src={imageSrc}
            alt={place.name}
            width={200}
            height={200}
            className="my-auto max-h-[200px] w-full max-w-[200px] rounded-lg object-cover sm:w-1/3"
          />
          <article className="mt-4 sm:mt-0 sm:flex-1">
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
              <li>
                <span className="font-semibold text-gray-800">Amenities: </span>
                {place.amenities}
              </li>
              <li>
                <span className="font-semibold text-gray-800">Capacity: </span>
                {place.capacity}
              </li>
              <li>
                <span className="font-semibold text-gray-800">Location: </span>
                {place.location}
              </li>
            </ul>
          </article>
        </section>
        <BookingForm place={place} />
      </section>
    </>
  );
};

export default PlacePage;
