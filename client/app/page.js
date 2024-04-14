"use client";
import { WelcomeContent } from "@/components/organisms/WelcomeContent";
import { HomeContent } from "../components/organisms/HomeContent";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [contentVisible, setContentVisible] = useState("home");
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (animateOut) {
      setTimeout(() => {
        setContentVisible("welcome");
        setAnimateOut(false);
      }, 2000);
    }
  }, [animateOut]);

  const handleContentClick = () => {
    if (contentVisible === "home") {
      setAnimateOut(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div
        onClick={handleContentClick}
        className={animateOut ? "fade-out" : ""}
      >
        {contentVisible === "home" ? <HomeContent /> : null}
      </div>
      <div className={contentVisible === "welcome" ? "fade-in" : "hidden"}>
        <WelcomeContent />
      </div>
    </div>
  );
}
