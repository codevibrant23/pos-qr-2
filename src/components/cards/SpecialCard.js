import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { NonVegIcon, VegIcon } from "../Icons";

export default function SpecialCard({ product }) {
  return (
    <div className="min-w-64 p-4 rounded-2xl border border-gray-200 shadow-sm bg-white">
      {/* Image & Background Heart */}
      <div className="relative w-full h-36 flex justify-center items-center bg-green-100 rounded-xl">
        <div className="absolute w-12 h-12 bg-green-600 rounded-full top-2 left-6"></div>
        <div className="absolute w-16 h-16 bg-green-500 rounded-full top-4 left-10"></div>
        {product.image && (
          <Image
            src={product.image}
            width={80}
            height={80}
            alt={product.name}
            className="relative z-10"
          />
        )}
        <div className="absolute bottom-2 right-2 text-green-600">◆</div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
          {!product.isVeg ? <VegIcon /> : <NonVegIcon />}
        </div>
        <h3 className="font-medium text-lg">{product.name}</h3>
        <p className="text-gray-700 font-semibold">₹{product.price}</p>
      </div>

      {/* Add Button */}
      <div className="mt-3 flex justify-center">
        <Button
          variant="outline"
          className="border-orange-500 text-orange-600 px-6 py-2 rounded-lg"
        >
          Add
        </Button>
      </div>

      {/* Love Count */}
      <div className="mt-2 flex items-center justify-center text-gray-500 text-sm">
        <Heart className="w-4 h-4 text-red-500 mr-1" />
        loved by {product.loves || "33k"}
      </div>
    </div>
  );
}
