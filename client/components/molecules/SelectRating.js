import { Star } from "../atoms/Star";

export const SelectRating = ({ rating, setRating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            filled={index < rating}
            onClick={() => setRating(index + 1)}
          />
        ))}
      </div>
    );
  };
  