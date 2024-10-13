import PlaceCard from "@/components/PlaceCard";
import places from "@/data/places.json";

export default function Home() {
  return (
    <>
      {places.length > 0 ? (
        places.map((place) => <PlaceCard key={place.$id} place={place} />)
      ) : (
        <p>No places available at the moment.</p>
      )}
    </>
  );
}
