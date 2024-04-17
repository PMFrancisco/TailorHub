import { CustomMarker } from "./CustomMarker";

export const MarkerGroup = ({
  restaurants,
  selectedRestaurant,
  onRestaurantClick,
}) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <CustomMarker
          key={restaurant.id}
          position={[restaurant.latlng.lat, restaurant.latlng.lng]}
          onClick={() => onRestaurantClick(restaurant)}
          selected={selectedRestaurant && restaurant.id === selectedRestaurant.id}
          />
      ))}
    </>
  );
};
