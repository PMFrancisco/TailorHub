import { useState } from "react";
import { useUser } from "@/app/context/UserContext";
import { Text } from "../atoms/Text";
import { Arrow } from "../atoms/Arrow";
import { DropDownMenu } from "../molecules/DropDownMenu";

export const UserPanel = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-4" onClick={toggleMenu}>
        <Text variant="SRegular">{user && user.username}</Text>
        <Arrow className={`transform ${isOpen ? "rotate-90" : "-rotate-90"}`} />
      </div>
      {isOpen && <DropDownMenu />}
    </div>
  );
};
