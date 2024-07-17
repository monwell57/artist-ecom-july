// pages/index.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Banner from "./components/Banner";
import { currentUser } from "@clerk/nextjs";
import { getProducts } from "@/sanity/product-util";

export default async function Home() {
  const user = await currentUser();

  if (!user) return <div>Not logged in</div>;
  const email = user?.emailAddresses[0]?.emailAddress;

  const products = await getProducts();

  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center mt-10 space-y-4 w-full">
        <Banner />
      </div>

      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-[#5B20B6] text-center">
          Featured Products
        </h1>
      </div>

      <div className="flex p-10">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
