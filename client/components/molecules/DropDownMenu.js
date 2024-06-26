import { useUser } from "@/app/context/UserContext";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import Link from "next/link";

export const DropDownMenu = () => {
  const { logout } = useUser();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    <div className="text-white flex flex-col min-w-[250px] absolute top-full right-0 transform translate-y-2 bg-[#264BEB] rounded-xl rounded-tr-none p-4 z-50">
      <Text variant="SRegular">Panel de control</Text>
      <Link href="/restaurants/new"><Text variant="SRegular">Añadir restaurante</Text></Link>
      <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <Button onClick={handleLogout}>Cerrar sesión</Button>
    </div>
  );
};
