import { Star } from "../atoms/Star";

export const Rating = ({ reviews }) => {
  const normalizedReviews = Array.isArray(reviews) ? reviews : [reviews];

  const totalRating = normalizedReviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  const averageRating = Math.round(totalRating / normalizedReviews.length);

  const totalStars = 5;

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} filled={index < averageRating} />
      ))}
    </div>
  );
};
