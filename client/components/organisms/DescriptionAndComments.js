import { Text } from "../atoms/Text";
import { Comment } from "../molecules/Comment";

export const DescriptionAndComments = ({ restaurant, reviews }) => {

  return (
    <div className="flex flex-col">
      <Text variant="SRegular" className="text-black">
        {restaurant.description}
      </Text>
      {reviews &&
        reviews.map((review) => (
          <div key={review.name} className="gap-4 text-black">
            <Comment key={review.date} review={review} />
            <hr className="my-6 h-0.5 border-t-0 bg-[#264BEB] dark:bg-white/10" />
          </div>
        ))}
    </div>
  );
};
