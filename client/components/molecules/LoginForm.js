import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export const LoginForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-2/3">
      <Input
        label={"Email"}
        id={"email"}
        type={"email"}
        placeholder={"Escribe tu email"}
      />
      <Input
        label={"Contraseña"}
        id={"password"}
        type={"password"}
        placeholder={"Escribe tu contraseña"}
      />
      <div>
      <Button type="submit">Entrar</Button>
      </div>
    </form>
  );
};
