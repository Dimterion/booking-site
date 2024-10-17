import Heading from "@/components/Heading";
import getMyPlaces from "@/app/actions/getMyPlaces";

const MyPlacesPage = async () => {
  const places = await getMyPlaces();

  return (
    <>
      <Heading title="My places" />
      {places.length > 0
        ? places.map((place) => <h3 key={place.$id}>{place.name}</h3>)
        : "You have no listings."}
    </>
  );
};

export default MyPlacesPage;
