import { Button } from "../atoms/Button";
import { TextArea } from "../atoms/TextArea";
import { SelectRating } from "./SelectRating";

export const CommentEdit = ({ editedComment, setEditedComment, editedRating, setEditedRating, handleEdit, handleToggleEdit }) => {
  return (
    <div className="flex flex-col items-end gap-4 m-4">
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
    </div>
  );
};

