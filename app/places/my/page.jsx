import Heading from "@/components/Heading";
import MyPlaceCard from "@/components/MyPlaceCard";
import getMyPlaces from "@/app/actions/getMyPlaces";

const MyPlacesPage = async () => {
  const places = await getMyPlaces();

  return (
    <>
      <Heading title="My places" number={places.length} />
      {places.length > 0
        ? places.map((place) => <MyPlaceCard key={place.$id} place={place} />)
        : "You have no listings."}
    </>
  );
};

export default MyPlacesPage;
