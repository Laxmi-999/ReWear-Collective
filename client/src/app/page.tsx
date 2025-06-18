import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import FeaturedProducts from "@/components/product/FeaturedProducts";
import React from "react";


const page = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <FeaturedProducts/>
      <Footer />
    </div>
  );
};

export default page;
