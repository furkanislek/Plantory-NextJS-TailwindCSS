import React from "react";
import Image from "next/image";
import Menu from "../Menu/page";
import StarRating from "@/components/StarRating";
// Yıldız reyting komponenti


// ProductCard için tip tanımlaması
interface ProductCardProps {
  name: string;
  latinName: string;
  price: string;
  imageSrc: string;
}

// Ürün kartı komponenti
const ProductCard = ({
  name,
  latinName,
  price,
  imageSrc,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#F8F9FF] rounded-lg p-4 flex items-center justify-center h-64 mb-4">
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={300}
          className="object-contain max-h-56"
        />
      </div>
      <div>
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="text-gray-600 text-sm italic">{latinName}</p>
        <div className="my-2">
          <StarRating />
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-green-500 text-2xl font-bold">${price}</span>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const BestSellers = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-white py-16 px-6 md:px-10 lg:px-[12vw]">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                <span className="text-gray-800">Best </span>
                <span className="text-green-500">Seller</span>
                <span className="text-gray-800"> Plants</span>
              </h2>
              <p className="text-gray-600">
                Our Customers' Favorites – Bestselling Beauties
                <br className="hidden md:block" />
                That Brighten Every Home
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white rounded-md px-8 py-4 font-medium transition-colors duration-300 w-full md:w-auto">
              View All Product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {/* Sol Taraftaki Öne Çıkan Ürün */}
          <div className="relative lg:row-span-2 overflow-hidden rounded-lg h-full">
            <div className="h-full relative bg-[#F8F9FF]">
              {/* Yeşil eğim alt kısmı - diagonal */}
              <div
                className="absolute bottom-0 left-0 w-full h-[45%] bg-green-500 z-0"
                style={{
                  clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
                }}
              ></div>

              {/* Bitki resmi */}
              <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center z-10">
                <Image
                  src="/photos/header.webp"
                  alt="Featured Plant"
                  width={450}
                  height={650}
                  className="object-contain h-[95%] z-10"
                  style={{
                    filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1))",
                  }}
                  priority
                />
              </div>

              {/* Yazı kısmı */}
              <div className="absolute bottom-16 left-8 z-20 text-white">
                <h3 className="text-3xl font-bold">TOP-RATED</h3>
                <h4 className="text-4xl font-bold">PLANTS ONLY</h4>
              </div>
            </div>
          </div>

          {/* Sağdaki 4 Ürün Grid */}
          <ProductCard
            name="Monstera Deliciosa"
            latinName="Monstera Deliciosa"
            price="12.99"
            imageSrc="/photos/header.webp"
          />
          <ProductCard
            name="Snake Plant"
            latinName="Sansevieria"
            price="7.49"
            imageSrc="/photos/header.webp"
          />
          <ProductCard
            name="ZZ Plant"
            latinName="Zamioculcas Zamiifolia"
            price="12.99"
            imageSrc="/photos/header.webp"
          />
          <ProductCard
            name="Peace Lily"
            latinName="Spathiphyllum"
            price="7.49"
            imageSrc="/photos/header.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
