import { Card } from "../molecules/Card";
import { Footer } from "./Footer";

export const HomeContent = () => {
  return (
    <div className="flex flex-col h-screen justify-between px-8 pt-8 pb-4 gap-8 ">
      <Card />
      <Footer />
    </div>
  );
};
