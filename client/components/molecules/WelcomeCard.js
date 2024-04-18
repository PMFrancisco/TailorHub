import { Button } from "../atoms/Button";
import { LogoWithName } from "../atoms/LogoWithName";
import { Paragraph } from "../atoms/Paragraph";
import { Title } from "../atoms/Title";

export const WelcomeCard = () => {
  return (
    <div className="bg-[#F1F1F0] text-black rounded-xl p-8 flex flex-col items-start justify-center w-full m-auto gap-8">
      <LogoWithName />
      <div>
        <Title>Hola,</Title>
        <Paragraph>
          Bienvenido a la prueba de Tailor hub, en ella has de añadir los
          restaurantes favoritos donde te gustaría ir en tu onboarding.
        </Paragraph>
      </div>
      <Button href="/login" className="border-black">Entrar</Button>
    </div>
  );
};
