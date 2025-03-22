"use client";

import { Button } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function BackButton({ icon }) {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      borderRadius="xl"
      size="sm"
      onClick={() => router.back()}
    >
      {icon}
    </Button>
  );
}
