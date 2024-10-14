import Heading from "@/components/Heading";
import PlaceCard from "@/components/PlaceCard";
import getAllPlaces from "./actions/getAllPlaces";

export default async function Home() {
  const places = await getAllPlaces();

  return (
    <>
      <Heading title="Available places" />
      {places.length > 0 ? (
        places.map((place) => <PlaceCard key={place.$id} place={place} />)
      ) : (
        <p>No places available at the moment.</p>
      )}
    </>
  );
}
