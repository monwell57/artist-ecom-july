"use client";
import Image from "next/image";
import React, { useState } from "react";
import useCartStore from "../../cartStore";
import { toast } from "react-hot-toast";

function Details({ product }) {
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);

  const addToCart = useCartStore((state) => state.addToCart);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: qty,
      color: selectedColor,
      size: selectedSize,
    });
    toast.success("Added to cart");
  };

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Main Image */}
        <div className="shadow-md relative h-96 overflow-hidden aspect-ratio-1">
          <img src={selectedImage} layout="fill" objectfit="cover" alt="art" />
        </div>

        {/* Right - Details */}
        <div className="flex flex-col p-6 justify-between">
          <h1 className="text-3xl font-semibold text-[#5B20B6]">
            {product?.name}
          </h1>
          <p className="text-lg text-gray-500 mt-4">{product?.description}</p>

          {/* Color Selection Circles */}
          {product?.colors && product.colors.length > 0 && (
            <div className="flex mt-6 space-x-3">
              {product.colors.map((color) => {
                const colorClass =
                  {
                    Grey: "bg-gray-500",
                    Black: "bg-gray-800",
                    Blue: "bg-blue-800",
                    Red: "bg-red-500",
                    Green: "bg-green-500",
                    Yellow: "bg-yellow-500",
                    Purple: "bg-purple-500",
                    Orange: "bg-orange-500",
                    Pink: "bg-pink-500",
                    Brown: "bg-brown-500",
                    White: "bg-white",
                    Cyan: "bg-cyan-500",
                    Magenta: "bg-magenta-500",
                    Lime: "bg-lime-500",
                    Olive: "bg-olive-500",
                    Navy: "bg-navy-500",
                    Teal: "bg-teal-500",
                    Aqua: "bg-aqua-500",
                    Maroon: "bg-maroon-500",
                    Beige: "bg-beige-500",
                    Mint: "bg-mint-500",
                    Lavender: "bg-lavender-500",
                    Coral: "bg-coral-500",
                    Turquoise: "bg-turquoise-500",
                    Silver: "bg-silver-500",
                    Gold: "bg-gold-500",
                  }[color] || "bg-gray-300";

                return (
                  <div
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    key={color}
                    className={`${
                      color === selectedColor ? "border-4 border-[#5b20b6]" : ""
                    } w-8 h-8 rounded-full ${colorClass} cursor-pointer hover:border-4 border-[#5b20b6]`}
                  ></div>
                );
              })}
            </div>
          )}

          {/* Size Selection */}
          {product?.sizes && product.sizes.length > 0 && (
            <div className="flex mt-6 space-x-3">
              {product.sizes.map((size) => (
                <div
                  onClick={() => {
                    setSelectedSize(size);
                  }}
                  key={size}
                  className={`${
                    size === selectedSize ? "border-4 border-[#5b20b6]" : ""
                  } px-4 py-2 rounded-md bg-gray-200 cursor-pointer hover:border-4 border-[#5b20b6]`}
                >
                  {size}
                </div>
              ))}
            </div>
          )}

          <div className="mt-5">
            <span className="text-[#5B20B6] text-xl font-semibold">
              ${product?.price}
            </span>
          </div>

          <div className="mt-6 flex flex-col text-gray-500">
            <label className="ml-2" htmlFor="">
              Qty
            </label>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-20 px-4 h-10 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-[#5B20B6] text-white px-6 py-3 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Below Main Image - Small Image List */}
      <div className="mt-2">
        <ul className="flex gap-4 overflow-x-auto">
          <li
            onClick={() => {
              setSelectedImage(product?.image);
            }}
            className={`${
              selectedImage === product?.image
                ? "border-4 border-[#5b20b6]"
                : ""
            } w-20 relative overflow-hidden aspect-ratio-1 cursor-pointer hover:border-4 border-[#5b20b6]`}
          >
            <img
              src={product?.image}
              layout="fill"
              objectfit="cover"
              alt="small_art1"
            />
          </li>
          {product?.extraImages?.map((image) => (
            <li
              key={image}
              onClick={() => {
                setSelectedImage(image);
              }}
              className={`${
                selectedImage === image ? "border-4 border-[#5b20b6]" : ""
              } w-20 relative overflow-hidden aspect-ratio-1 cursor-pointer hover:border-4 border-[#5b20b6]`}
            >
              <img
                src={image}
                layout="fill"
                objectfit="cover"
                alt="small_art1"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
