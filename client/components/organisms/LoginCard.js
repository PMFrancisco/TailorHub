import { LogoWithName } from "../atoms/LogoWithName";
import { TextLink } from "../atoms/TextLink";
import { LoginForm } from "../molecules/LoginForm";

export const LoginCard = () => {
  return (
    <div className="bg-[#264BEB] text-white rounded-xl p-8 flex flex-col items-start justify-center w-full m-auto gap-8">
      <LogoWithName className="filter-white" />
      <TextLink href={"/register"}>¿No tienes cuenta? Registrate</TextLink>

      <LoginForm />
    </div>
  );
};
