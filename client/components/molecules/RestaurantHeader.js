import { Text } from "../atoms/Text";

export const RestaurantHeader = ({ name, address }) => (
    <div>
      <Text variant="restaurantTitle">{name}</Text>
      <Text variant="SRegular">{address}</Text>
    </div>
  );