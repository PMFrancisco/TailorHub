import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export const RegisterForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, email });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-2/3">
      <Input
        label={"Email"}
        id={"email"}
        type={"email"}
        placeholder={"Añade tu email"}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        label={"Nombre de Usuario"}
        id={"userName"}
        type={"text"}
        placeholder={"Añade tu nombre"}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <div>
        <Button type="submit">Siguiente</Button>
      </div>
    </form>
  );
};
