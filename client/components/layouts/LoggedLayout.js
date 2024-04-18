import { Footer } from "../organisms/Footer";
import { NavBar } from "../organisms/NavBar";

export const LoggedLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="px-4 pt-4">
        <NavBar />
      </div>
      <div className="flex-grow overflow-hidden">{children}</div>
      <div className="mt-8 px-8 pb-4">
        <Footer />
      </div>
    </div>
  );
};
