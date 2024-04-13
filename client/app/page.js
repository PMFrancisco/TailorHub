'use client'
import { WelcomeContent } from "@/components/organisms/WelcomeContent";
import { HomeContent } from "../components/organisms/HomeContent";

export default function Home() {
  const handleContentClick = () => {
    const homeContent = document.getElementById('homeContent');
    const welcomeContent = document.getElementById('welcomeContent');

    homeContent.classList.add('fade-out');
    setTimeout(() => {
      homeContent.classList.add('hidden');
      welcomeContent.classList.remove('hidden');
      welcomeContent.classList.add('fade-in');
    }, 2000);
  };
  return (
    <div className="relative min-h-screen bg-white">
      <div id="homeContent" onClick={handleContentClick}>
        <HomeContent />
      </div>
      <div id="welcomeContent" className="hidden">
        <WelcomeContent />
      </div>
    </div>
  );
}

