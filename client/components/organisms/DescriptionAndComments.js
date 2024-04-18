import { Text } from "../atoms/Text";
import { CommentController } from "./CommentController";

export const DescriptionAndComments = ({
  restaurant,
  reviews,
  onReviewDeleted,
  onReviewUpdated,
}) => {
  return (
    <div className="flex flex-col text-black">
      <Text variant="SRegular" >
        {restaurant.description}
      </Text>
      {reviews &&
        reviews.map((review) => (
          <div key={review.id} className="gap-4 text-black">
            <CommentController
              key={review.id}
              restaurant={restaurant}
              review={review}
              onReviewDeleted={onReviewDeleted}
              onReviewUpdated={onReviewUpdated}
            />
            <hr className="my-6 h-0.5 border-none bg-[#264BEB] dark:bg-white/10" />
          </div>
        ))}
    </div>
  );
};
