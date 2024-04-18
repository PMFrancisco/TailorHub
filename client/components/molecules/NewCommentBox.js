import { useState } from "react";
import { SelectRating } from "./SelectRating";
import { TextArea } from "../atoms/TextArea";
import { Button } from "../atoms/Button";
import { addReviewToRestaurant } from "@/app/api/restaurants";
import { useUser } from "@/app/context/UserContext";

export const NewCommentBox = ({ restaurantId, addReview }) => {
  const { user } = useUser();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSendClick = async () => {
    if (!user) {
      alert("Debes estar logueado para enviar un comentario.");
      return;
    }

    if (!comment.trim() || rating === 0) {
      alert(
        "Por favor, asegúrate de escribir un comentario y seleccionar una calificación."
      );
      return;
    }

    try {
      const review = {
        name: user.username,
        rating,
        comments: comment,
      };
      const addedReview = await addReviewToRestaurant(restaurantId, review);
      addReview(addedReview);
      alert("Comentario añadido con éxito!");
      setComment("");
      setRating(0);
    } catch (error) {
      console.error("Error al enviar el comentario:", error);
      alert("Error al enviar el comentario");
    }
  };

  return (
    <div className="w-full min-w-72">
      <div className="flex flex-col border-2 border-black rounded-xl p-4 w-full gap-4 text-black">
        <SelectRating rating={rating} setRating={setRating} />
        <TextArea
          placeholder="Escribe tu comentario sobre el restaurante"
          className={
            "min-h-64 resize-y border-0 rounded-xl p-0 placeholder:text-black"
          }
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <Button onClick={handleSendClick} className={"border-black"}>
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};
