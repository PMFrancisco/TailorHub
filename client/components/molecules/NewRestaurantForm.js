import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export const NewRestaurantForm = ({ onFormSubmit, imageSrc }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    console.log(
      "Name:",
      name,
      "Address:",
      address,
      "Description:",
      description,
      "Image:",
      imageSrc
    );
    event.preventDefault();
    if (!name || !address || !description) {
      alert("Todos los campos son necesarios.");
      return;
    }
    const formData = {
      name,
      address,
      description,
      image: imageSrc,
    };
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Nombre del restaurante:"
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del restaurante"
        className="placeholder:text-black border-black"
      />
      <Input
        label="Dirección del restaurante:"
        id="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Dirección del restaurante"
        className="placeholder:text-black border-black"
      />
      <Input
        label="Descripción del restaurante:"
        id="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escribe información acerca del restaurante"
        className="placeholder:text-black border-black"
      />
      <div className="pt-4">
        <Button type="submit" className="border-black">
          Guardar
        </Button>
      </div>
    </form>
  );
};
