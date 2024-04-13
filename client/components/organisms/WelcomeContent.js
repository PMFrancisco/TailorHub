import { WelcomeImage } from "../atoms/WelcomeImage";
import { ImageContainer } from "../molecules/ImageContainer";
import { WelcomeCard } from "../molecules/WelcomeCard";
import { Footer } from "./Footer";

export const WelcomeContent = () => {
  return (
    <div className="flex flex-col h-screen gap-8">
      <div className="flex-grow overflow-hidden">
        <div className="flex flex-row items-end px-8 pt-8 gap-8 h-full">
          <div className="w-1/2">
            <WelcomeCard />
          </div>
          <div className="w-1/2 h-full">
            <ImageContainer>
              <WelcomeImage />
            </ImageContainer>
          </div>
        </div>
      </div>
      <div className="px-8 pb-4">
      <Footer />
      </div>
    </div>
  );
};
