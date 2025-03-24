"use client";

import { getProducts } from "@/lib/apiCalls/fetcher";
import {
  Box,
  Input,
  Spinner,
  Skeleton,
  VStack,
  Separator,
} from "@chakra-ui/react";
import { useParams, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import SimpleProductCard from "../cards/SimpleProductCard";

export default function SearchComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { outlet } = useParams();
  const searchParams = useSearchParams();
  const veg = searchParams.get("veg");
  const nonVeg = searchParams.get("nonVeg");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getProducts(outlet, veg, nonVeg);
      const productsArray =
        data.categories?.flatMap((category) => category.items) || [];
      setProducts(productsArray);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [outlet, veg, nonVeg]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filter products based on search input (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Input
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
        borderRadius="lg"
      />
      <Box overflowY="auto" py={5}>
        {loading ? (
          // Display a set of skeletons while loading
          <VStack spacing={4}>
            {[1, 2, 3, 4].map((skeleton) => (
              <Skeleton
                key={skeleton}
                height="100px"
                width="full"
                borderRadius="md"
              />
            ))}
          </VStack>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id}>
              <SimpleProductCard product={p} />
              <Separator my={5} />
            </div>
          ))
        ) : (
          <Box textAlign="center" py={10}>
            No products found.
          </Box>
        )}
      </Box>
    </>
  );
}
