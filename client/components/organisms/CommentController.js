import { useState } from "react";
import { useUser } from "@/app/context/UserContext";
import { CommentEdit } from "../molecules/CommentEdit";
import { CommentDisplay } from "../molecules/CommentDisplay";
import { deleteReviewFromRestaurant, updateReviewInRestaurant } from "@/app/api/restaurants";


export const CommentController = ({ review, restaurant, onReviewDeleted, onReviewUpdated }) => {
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

  return (
    <>
      {isEditing ? (
        <CommentEdit
          editedComment={editedComment}
          setEditedComment={setEditedComment}
          editedRating={editedRating}
          setEditedRating={setEditedRating}
          handleEdit={handleEdit}
          handleToggleEdit={handleToggleEdit}
        />
      ) : (
        <CommentDisplay
          review={review}
          user={user}
          handleToggleEdit={handleToggleEdit}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

