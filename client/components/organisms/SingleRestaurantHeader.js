import { StyledImage } from "../atoms/StyledImage";
import { Text } from "../atoms/Text";

export const SingleRestaurantHeader = ({ restaurant }) => (
  <div className="container relative rounded-xl w-full h-[600px] overflow-hidden">
    <StyledImage
      src={restaurant.image}
      alt={restaurant.name}
      className="w-full opacity-80"
    />
    <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
      <Text variant="header">{restaurant.name}</Text>
      <Text variant="SSemiBold">{restaurant.address}</Text>
    </div>
  </div>
);
