import { Footer } from "../organisms/Footer";
import { NavBar } from "../organisms/NavBar";

export const LoggedLayout = ({children}) => {
  return (
    <div className="flex flex-col h-screen gap-8">
      <div className="px-8 pt-8">
        <NavBar />
      </div>
      <div className="flex-grow overflow-hidden">
        {children}
      </div>
      <div className="px-8 pb-4">
        <Footer />
      </div>
    </div>
  );
};
