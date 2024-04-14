import { Footer } from "../organisms/Footer";

export const Layout = ({ leftContent, rightContent }) => {
  return (
    <div className="flex flex-col h-screen gap-8">
      <div className="flex-grow overflow-hidden">
        <div className="flex flex-row items-end px-8 pt-8 gap-8 h-full">
          <div className="w-1/2">{leftContent}</div>
          <div className="w-1/2 h-full">{rightContent}</div>
        </div>
      </div>
      <div className="px-8 pb-4">
        <Footer />
      </div>
    </div>
  );
};
