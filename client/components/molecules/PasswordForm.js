import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export const PasswordForm = ({ onSubmit }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-2/3">
      <Input
        label={"Crea una contraseña nueva"}
        id={"password"}
        type={"password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder={"Añade una contraseña"}
        className={"placeholder:text-white"}

      />
      <div>
        <Button type="submit">Finalizar</Button>
      </div>
    </form>
  );
};
