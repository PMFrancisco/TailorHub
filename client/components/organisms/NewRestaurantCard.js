import { useState } from "react";
import { StyledImage } from "../atoms/StyledImage";
import { ImageUploadBox } from "../molecules/ImageUploadBox";
import { NewRestaurantForm } from "../molecules/NewRestaurantForm";
import { addRestaurant } from "@/app/api/restaurants";

export const NewRestaurantCard = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleFormSubmit = async (formData) => {
    console.log("Submitting form with data:", formData);

    try {
      const response = await addRestaurant(formData, imageFile);
      alert("Restaurant added successfully!");
      console.log("Form submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to add restaurant.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <StyledImage src="/images/logo.png" />

      <div className="flex flex-row items-end px-8 pt-8 gap-8 w-full h-full">
        <div className="w-1/2 h-full">
          <ImageUploadBox
            setImageSrc={setImageSrc}
            setImageFile={setImageFile}
          />
        </div>
        <div className="w-1/2 h-full overflow-y-auto">
          <NewRestaurantForm
            imageSrc={imageSrc}
            onFormSubmit={handleFormSubmit}
          />
        </div>
      </div>

      <StyledImage src="/images/logo.png" />
    </div>
  );
};
