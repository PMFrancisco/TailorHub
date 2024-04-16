import { StyledImage } from "../atoms/StyledImage";
import { ImageContainer } from "../molecules/ImageContainer";
import { Rating } from "../molecules/Rating";
import { RestaurantHeader } from "../molecules/RestaurantHeader";
import { ReviewCount } from "../molecules/ReviewCount";

export const RestaurantCard = ({ restaurant }) => (
  <div className="flex flex-row gap-6">
    <ImageContainer
      imageUrl={restaurant.image}
      className={"w-[200px] h-[200px]"}
    >
      <StyledImage
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-full"
      />
    </ImageContainer>

    <div className="flex flex-col justify-between my-4">
      <RestaurantHeader name={restaurant.name} address={restaurant.address} />
      <div className="flex flex-row items-center gap-2">
        <Rating restaurant={restaurant} />
        <ReviewCount count={restaurant.reviews.length} />
      </div>
    </div>
  </div>
);
