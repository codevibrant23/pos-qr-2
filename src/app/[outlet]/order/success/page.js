// OrderSuccessPage.jsx
"use client";

import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";

export default function OrderSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-center">
      {/* Success Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="text-green-500 mb-6"
      >
        <CheckCircle size={80} />
      </motion.div>

      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 text-sm mb-6">
          Sit tight! Your food is being prepared.
        </p>
      </motion.div>

      {/* Order Summary */}
      <div className="bg-gray-50 w-full max-w-sm rounded-xl shadow-sm p-4 mb-6 text-left">
        <p className="text-sm text-gray-500">Order ID:</p>
        <p className="font-medium mb-2">#ODR123456</p>
        <div className="flex justify-between text-sm">
          <span>Total Amount</span>
          <span className="font-semibold text-orange-500">₹520</span>
        </div>
      </div>

      {/* Track Order Button */}
      <Button
        // className="w-full max-w-sm bg-orange-500 text-white rounded-xl text-base py-2"
        onClick={() => router.push("/")}
      >
        Back to Home
      </Button>
    </div>
  );
}
