"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import useCartStore from "../../cartStore";
import Link from "next/link";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { createOrder } from "@/sanity/order-util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [loading, setLoading] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const [shippingAddress, setShippingAddress] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const validateShippingDetails = () => {
    return Object.values(shippingAddress).every((field) => field.trim() !== "");
  };

  const onSubmit = async () => {
    if (!validateShippingDetails()) {
      toast.error("Please fill out all shipping details.");
      return;
    }

    const cardElement = elements?.getElement("card");
    setLoading(true);

    try {
      if (!stripe || !cardElement) return null;
      const data = await axios.post("/api/stripe", {
        data: { amount: cartTotal.toFixed(0) },
      });

      const res = await stripe?.confirmCardPayment(data?.data?.intent, {
        payment_method: { card: cardElement },
      });

      const status = res?.paymentIntent?.status;
      if (status === "succeeded") {
        setLoading(false);
        const email = user?.emailAddresses[0]?.emailAddress;

        if (email) {
          console.log("Shipping Address:", shippingAddress); // Add this line to debug
          console.log("Phone:", shippingAddress.phone); // Add this line to debug

          const res = await createOrder(
            email,
            cart,
            shippingAddress,
            shippingAddress.phone
          );
          if (res) {
            router.push("/order");
          }
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <ToastContainer />
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">
        {totalItems} items in Cart
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-[#5B20B6] border-b border-gray-200">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((product) => (
            <tr
              key={product?._id}
              className="hover:bg-gray-50 text-center border-b border-gray-300 text-[#5B20B6]"
            >
              <td className="py-2 px-4 flex items-center">
                <Image
                  className="mr-2"
                  src={product?.image}
                  width={50}
                  height={30}
                  alt="art"
                />
                {product?.name}
              </td>
              <td className="py-2 px-4">{product?.quantity}</td>
              <td className="py-2 px-4">${product?.price}</td>
              <td className="py-2 px-4">
                <FaTrash
                  onClick={() => {
                    handleRemoveFromCart(product?._id);
                  }}
                  className="text-[#5B20B6] mx-auto cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-[#5B20B6] ml-auto">
        <p className="text-lg font-semibold text-right mr-4">
          Total: ${cartTotal.toFixed(2)}
        </p>
      </div>

      {cartTotal > 0 && (
        <>
          <div className="mt-10 p-10 bg-gray-100">
            <CardElement />
          </div>
        </>
      )}

      <div className="mt-6 text-[#5B20B6] max-w-sm mx-auto space-y-4">
        {cartTotal > 0 && (
          <>
            <div className="grid gap-4">
              <label className="block">
                Street:
                <input
                  type="text"
                  name="street"
                  value={shippingAddress.street}
                  onChange={handleAddressChange}
                  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="block">
                City:
                <input
                  type="text"
                  name="city"
                  value={shippingAddress.city}
                  onChange={handleAddressChange}
                  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="block">
                State:
                <input
                  type="text"
                  name="state"
                  value={shippingAddress.state}
                  onChange={handleAddressChange}
                  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="block">
                Postal Code:
                <input
                  type="text"
                  name="postalCode"
                  value={shippingAddress.postalCode}
                  onChange={handleAddressChange}
                  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="block">
                Country:
                <input
                  type="text"
                  name="country"
                  value={shippingAddress.country}
                  onChange={handleAddressChange}
                  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="block">
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={shippingAddress.phone}
                  onChange={handleAddressChange}
                  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
            </div>
            <button
              disabled={cartTotal === 0}
              onClick={onSubmit}
              className="text-lg w-full font-semibold text-center mr-4 bg-[#5B20B6] text-white py-2 px-4 rounded hover:text-[#5B20B6] hover:bg-white border border-[#5B20B6]"
            >
              {loading ? "Loading..." : "Pay"}
            </button>
          </>
        )}

        <button className="text-lg w-full font-semibold text-center mr-4 bg-white hover:bg-[#5B20B6] hover:text-white text-[#5B20B6] border border-[#5B20B6] py-2 px-4 rounded">
          <Link href="/">Back to Shopping</Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
