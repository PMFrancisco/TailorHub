import { useState } from "react";
import { useUser } from "@/app/context/UserContext";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import { Rating } from "./Rating";
import {
  deleteReviewFromRestaurant,
  updateReviewInRestaurant,
} from "@/app/api/restaurants";
import { TextArea } from "../atoms/TextArea";
import { SelectRating } from "./SelectRating";

export const Comment = ({
  review,
  restaurant,
  onReviewDeleted,
  onReviewUpdated,
}) => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(review.comments);
  const [editedRating, setEditedRating] = useState(review.rating);

  const handleDelete = async () => {
    try {
      await deleteReviewFromRestaurant(restaurant.id, review.id);
      onReviewDeleted(review.id);
      alert("Comentario eliminado con éxito!");
    } catch (error) {
      console.error("Error al eliminar comentario:", error.message);
      alert("No se pudo eliminar el comentario");
    }
  };

  const handleEdit = async () => {
    try {
      const updatedReview = {
        name: review.name,
        comments: editedComment,
        rating: editedRating,
        date: review.date,
      };
      await updateReviewInRestaurant(restaurant.id, review.id, updatedReview);
      onReviewUpdated({ ...review, ...updatedReview });
      setIsEditing(false);
      alert("Comentario actualizado con éxito!");
    } catch (error) {
      console.error("Error al actualizar comentario:", error.message);
      alert("No se pudo actualizar el comentario");
    }
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  if (!review) {
    return <div>Se el primero en comentar.</div>;
  }

  return (
    <div className="flex flex-row justify-between items-center m-4">
      <div className="min-w-[200px] max-w-[200px]">
        <Text variant="MSemiBold">{review.name}</Text>
      </div>
      <div className="flex flex-col items-end gap-4">
        {isEditing ? (
          <>
            <SelectRating rating={editedRating} setRating={setEditedRating} />
            <TextArea
              className="w-full min-h-44"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
            <div className="flex gap-4">
              <Button onClick={handleEdit} className="border-black">
                Guardar
              </Button>
              <Button onClick={handleToggleEdit} className="border-black">
                Cancelar
              </Button>
            </div>
          </>
        ) : (
          <>
            <Rating reviews={review} setRating={setEditedRating} />
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
          </>
        )}
      </div>
    </div>
  );
};
