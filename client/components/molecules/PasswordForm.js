import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export const PasswordForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-2/3">
      <Input
        label={"Crea una contraseña nueva"}
        id={"password"}
        type={"password"}
        placeholder={"Añade una contraseña"}
      />
      <div>
        <Button type="submit">Finalizar</Button>
      </div>
    </form>
  );
};
