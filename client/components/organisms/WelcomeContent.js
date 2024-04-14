import { StyledImage } from "../atoms/StyledImage";
import { Layout } from "../layouts/Layout";
import { ImageContainer } from "../molecules/ImageContainer";
import { WelcomeCard } from "../molecules/WelcomeCard";

export const WelcomeContent = () => {
  return (
    <Layout
      leftContent={<WelcomeCard />}
      rightContent={
        <ImageContainer>
          <StyledImage
            src="/images/welcomePage.jpg"
            alt="Interior view of a contemporary café with warm lighting. Paper flower-designed lamps hang from the ceiling, drawing the eye to the wooden tables and matching chairs. A person is seated with their back to the camera, enjoying the cafe's serene ambiance."
          />
        </ImageContainer>
      }
    />
  );
};
