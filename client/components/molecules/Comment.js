import { Text } from "../atoms/Text";
import { Rating } from "./Rating";

export const Comment = ({ review }) => {
  if (!review) {
    return <div>Se el primero en comentar.</div>;
  }

  return (
    <div className="flex flex-row justify-between items-center m-4">
      <div className="min-w-[200px] max-w-[200px]">
        <Text variant="MSemiBold">{review.name}</Text>
      </div>
      <div className="flex flex-col items-end">
        <Rating reviews={review} />
        <Text variant="SRegular">{review.comments}</Text>
      </div>
    </div>
  );
};
