import { CustomMarker } from "../atoms/CustomMarker";

export const MarkerGroup = ({ restaurants }) => {console.log(restaurants);
    return (
  <>
    {restaurants.map((restaurant) => (
      <CustomMarker
        key={restaurant.id}
        position={[restaurant.latlng.lat, restaurant.latlng.lng]}
      />
    ))}
  </>
);}
