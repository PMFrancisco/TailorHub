import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { loginEmail } from "@/services/users";

export const LoginForm = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginEmail(email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-2/3">
      <Input
        label={"Email"}
        id={"email"}
        type={"email"}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={"Escribe tu email"}
      />
      <Input
        label={"Contraseña"}
        id={"password"}
        type={"password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder={"Escribe tu contraseña"}
      />
      <div>
        <Button type="submit">Entrar</Button>
      </div>
    </form>
  );
};
