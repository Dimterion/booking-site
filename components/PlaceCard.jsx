import Image from "next/image";
import Link from "next/link";

const PlaceCard = ({ place }) => {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_PLACES;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${place.image}/view?project=${projectId}`;
  const imageSrc = place.image ? imageUrl : "/images/placeholder_img.jpg";

  return (
    <section className="mt-4 flex flex-col items-start justify-between rounded-md bg-gray-50 p-4 shadow sm:flex-row sm:items-center">
      <article className="flex flex-wrap items-center gap-4 sm:flex-row">
        <Image
          src={imageSrc}
          width={200}
          height={200}
          alt={place.name}
          className="max-h-[200px] w-full max-w-[200px] rounded-md object-cover sm:mb-0"
        />
        <section className="space-y-1">
          <h2 className="text-xl font-semibold">{place.name}</h2>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Address: </span>
            {place.address}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Availability: </span>
            {place.availability}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Price: </span>$
            {place.price_per_hour}
          </p>
        </section>
      </article>
      <Link
        href={`/places/${place.$id}`}
        className="my-2 flex w-full min-w-40 items-center justify-center gap-2 rounded-md bg-blue-800 px-4 py-2 text-center text-white transition-colors hover:bg-blue-950 sm:mb-0 sm:w-auto"
      >
        View place
      </Link>
    </section>
  );
};

export default PlaceCard;
