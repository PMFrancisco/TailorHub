import { UserPanel } from "./UserPanel";

export const NavBar = () => {

  return (
    <nav className="text-black p-4 flex justify-end items-center">
        <UserPanel />
    </nav>
  );
};
