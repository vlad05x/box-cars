"use client";
import Header from "@/components/layouts/Header";
import BrandSection from "@/features/BrandsSection/page";
import MainPage from "@/features/main/page";

export default function Home() {
  return (
    <>
      <Header />
      <MainPage />
      <BrandSection />
    </>
  );
}
