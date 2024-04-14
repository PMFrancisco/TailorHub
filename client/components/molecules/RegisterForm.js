import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export const RegisterForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-2/3">
      <Input
        label={"Email"}
        id={"email"}
        type={"email"}
        placeholder={"Añade tu email"}
      />
      <Input
        label={"Nombre de Usuario"}
        id={"userName"}
        type={"text"}
        placeholder={"Añade tu nombre"}
      />
      <div>
        <Button type="submit">Siguiente</Button>
      </div>
    </form>
  );
};
