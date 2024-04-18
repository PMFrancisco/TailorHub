import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import { Rating } from "./Rating";

export const CommentDisplay = ({ review, user, handleToggleEdit, handleDelete }) => {
  return (
    <div className="flex flex-row justify-between items-center m-4">
      <div className="min-w-[200px] max-w-[200px]">
        <Text variant="MSemiBold">{review.name}</Text>
      </div>
      <div className="flex flex-col items-end gap-4">
        <Rating reviews={review} />
        <Text variant="SRegular">{review.comments}</Text>
        {user && user.username === review.name && (
          <div className="flex gap-4">
            <Button onClick={handleToggleEdit} className="border-black">
              Editar
            </Button>
            <Button onClick={handleDelete} className="border-black">
              Eliminar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

