import Heading from "@/components/Heading";
import MyPlaceCard from "@/components/MyPlaceCard";
import getMyPlaces from "@/app/actions/getMyPlaces";

const MyPlacesPage = async () => {
  const places = await getMyPlaces();

  return (
    <>
      <Heading title="My places" />
      {places.length > 0
        ? places.map((place) => <MyPlaceCard key={place.$id} place={place} />)
        : "You have no listings."}
    </>
  );
};

export default MyPlacesPage;
