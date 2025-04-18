"use client";

import { useState } from "react";
import { createOrder } from "./Razorpay";
import { useCart } from "@/context/CartContext";
import { placeOrder } from "@/lib/apiCalls/actions";
import razorpayConfig from "../../../../razorpayPaymentConfig";
import { useParams, useRouter } from "next/navigation";

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { cart } = useCart();
  const { outlet } = useParams();
  const router = useRouter();

  const initiatePayment = async (userData) => {
    setLoading(true);
    setError(null);

    const res = await loadRazorpay();

    if (!res) {
      setError("Failed to load payment SDK.");
      setLoading(false);
      return;
    }

    try {
      // Call your server-side API to get order data
      const orderData = await createOrder(cart);

      const options = {
        key: razorpayConfig.key,

        currency: orderData.currency,
        amount: orderData.amount,
        order_id: orderData.id,

        name: razorpayConfig.name,
        description: razorpayConfig.description,
        image: razorpayConfig.image,
        theme: razorpayConfig.theme,
        timeout: razorpayConfig.timeout,

        modal: {
          handleback: true,
          // ondismiss: () => {},
        },
        handler: async function (response) {
          const res = await placeOrder(outlet, {
            cart,
            userData,
            paymentResponse: response,
          });
          if (res?.error) {
            router.push(`/${outlet}/order/failed`);
            return;
          }
          router.push(
            `/${outlet}/order/success?orderId=${res?.order_number}&total=${res?.total_price}`
          );
        },
        prefill: {
          name: userData?.name,
          // email: userData.email,
          contact: userData?.contact,
          method: userData?.method,
        },
        readonly: razorpayConfig.readonly,
        config: razorpayConfig.config,
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      setError("Payment initiation failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { initiatePayment, loading, error };
};

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};
