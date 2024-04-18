import { useState, useRef } from "react";
import { Button } from "../atoms/Button";

export const ImageUploadBox = ({ setImageFile }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleImageChange = (e) => {
      e.stopPropagation();
      const file = e.target.files[0];
      if (file && file.type.startsWith("image")) {
        const imageURL = URL.createObjectURL(file);
        setImageSrc(imageURL);
        setImageFile(file);
      } else {
        setImageSrc(null);
        setImageFile(null);
      }
    };

  const removeImage = () => {
    URL.revokeObjectURL(imageSrc);
    setImageSrc(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClickOnLabel = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="w-full min-h-full relative">
      {!imageSrc ? (
        <label
          onClick={handleClickOnLabel}
          className="h-full min-h-72 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex justify-center items-center"
        >
          <span className="text-gray-500">Añadir imagen</span>
          <input
            id="fileInput"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </label>
      ) : (
        <div className="w-full h-full bg-cover bg-center rounded-md relative">
          <img
            src={imageSrc}
            alt="Uploaded"
            className="object-cover w-full h-full rounded-md"
          />
          <Button onClick={removeImage} className="absolute top-2 right-2">
            Eliminar
          </Button>
        </div>
      )}
    </div>
  );
};
