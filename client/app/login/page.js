"use client";

import { StyledImage } from "@/components/atoms/StyledImage";
import { Layout } from "@/components/layouts/Layout";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import { LoginCard } from "@/components/organisms/LoginCard";

export default function Login() {
  return (
    <Layout
      leftContent={<LoginCard />}
      rightContent={
        <ImageContainer>
          <StyledImage
            src="/images/login.jpg"
            alt="Indoor botanical garden cafe with lush hanging plants and natural lighting. Patrons enjoy conversations at wooden tables beneath a glass ceiling."
          />
        </ImageContainer>
      }
    />
  );
}
