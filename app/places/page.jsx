import Heading from "@/components/Heading";
import PlaceCard from "@/components/PlaceCard";
import getAllPlaces from "@/app/actions/getAllPlaces";

export default async function Places() {
  const places = await getAllPlaces();

  return (
    <>
      <Heading title="Available places" number={places.length} />
      {places.length > 0 ? (
        places.map((place) => <PlaceCard key={place.$id} place={place} />)
      ) : (
        <p className="mt-6 text-center text-lg text-gray-600">
          No places available at the moment.
        </p>
      )}
    </>
  );
}
