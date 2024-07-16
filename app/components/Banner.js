import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchBannerImage } from "../../sanity/banner-util";
import { fetchBannerTextData } from "../../sanity/bannerText-util";

export default async function Banner() {
  const bannerImage = await fetchBannerImage();
  const bannerText = await fetchBannerTextData();

  if (!bannerImage) {
    return <div>No banner image found</div>;
  }

  return (
    <div>
      <section className="relative bg-white dark:bg-gray-900 h-[90vh]">
        <div className="absolute inset-0 z-0 h-full w-full">
          <div className="relative h-full w-full">
            <Image
              src={bannerImage.image.asset.url}
              alt={bannerImage.image.altText}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>{" "}
            {/* Semi-transparent overlay */}
          </div>
        </div>

        <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
          <div className="mr-auto place-self-center lg:col-span-7 p-6 rounded-lg">
            <h1
              className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
            >
              {bannerText.title}
            </h1>

            <p
              className="max-w-lg mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl "
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
            >
              {bannerText.description}
            </p>
            <div className="flex flex-col items-start space-y-4">
              <Link
                href="/products"
                className="bg-black inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                All Items
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
