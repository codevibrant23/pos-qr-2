import React from "react";
import Image from "next/image";
import { LeafyGreen } from "lucide-react";
import { NonVegIcon, VegIcon } from "../Icons";
import { Button } from "../ui/button";

export default function SimpleProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white flex items-center rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer p-3 w-full "
    >
      {/* Left Section: Veg/Non-Veg Indicator */}
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
        {!product.isVeg ? <VegIcon /> : <NonVegIcon />}
      </div>
      {/* Middle Section: Product Name & Price */}
      <div className="flex-1 px-4">
        <div className="text-lg font-semibold text-gray-800">
          {product.name}
        </div>
        <div className="mt-1 text-sm text-gray-600">Rs. {product.price}</div>
      </div>
      {/* Right Section: Product Image */}
      <div className="flex-shrink-0 w-16 h-16 relative rounded-lg border border-gray-200">
        {product.image && (
          <Image
            src={product.image}
            layout="fill"
            objectFit="cover"
            alt={product.name}
          />
        )}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <Button className="border border-orange-500 text-orange-500 bg-white">Add</Button>
        </div>
      </div>
    </div>
  );
}
