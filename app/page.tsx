"use client";
import Navbar from "@/component/Navbar";
import LandingHero from "@/sections/LandingHero";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingHero
        title="Creating Unforgettable Experiences"
        subtitle="Premium event planning and production"
      />
    </>
  );
}
