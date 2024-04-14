"use client";

import { StyledImage } from "@/components/atoms/StyledImage";
import { Layout } from "@/components/layouts/Layout";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import { RegisterCard } from "@/components/organisms/RegisterCard";

export default function SignIn() {
  return (
    <Layout
      leftContent={<RegisterCard />}
      rightContent={
        <ImageContainer>
          <StyledImage
            src="/images/signIn.jpg"
            alt="Interior of a dimly lit restaurant with set tables, white tablecloths, and glasses. A waiter is in the background attending to the dining area."
          />
        </ImageContainer>
      }
    />
  );
}
