import { Star } from "../atoms/Star";

export const Rating = ({ restaurant }) => {
  console.log(restaurant);

  const totalRating = restaurant.reviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  const averageRating = Math.round(totalRating / restaurant.reviews.length);

  const totalStars = 5;

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} filled={index < averageRating} />
      ))}
    </div>
  );
};
