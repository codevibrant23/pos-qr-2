import React from "react";
import Image from "next/image";
import { NonVegIcon, VegIcon } from "../Icons";

const TopProductCard = ({ product, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer w-full rounded-xl shadow hover:shadow-lg transition duration-200 overflow-hidden"
    >
      {/* Product Image Section */}
      <div className="relative h-40 w-full bg-white">
        {product.image && (
          <Image 
            src={product.image}
            layout="fill"
            objectFit="cover"
            alt={product.name}
          />
        )}
        {/* Veg/Non-Veg Badge */}
        {typeof product.isVeg !== "undefined" && (
          <div className="absolute top-2 left-2">
            {product.isVeg ? <VegIcon /> : <NonVegIcon />}
          </div>
        )}
      </div>
      {/* Product Details Section */}
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="text-sm text-gray-600">₹{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
