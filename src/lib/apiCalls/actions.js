"use client";

import { buildCheckoutCart } from "../helpers/checkout/checkout";

const baseUrl = process.env.NEXT_PUBLIC_baseUrl;

export const placeOrder = async (
  outlet_id,
  { cart, paymentResponse, userData }
) => {
  if (!paymentResponse) return;

  const endpoint = `/v1/qr/api/place-order/${outlet_id}/`;

  const orderData = {
    address: "",
    mode: userData?.method,
    customer: {
      name: userData?.name,
      phone_number: userData?.contact,
    },
    ...paymentResponse,
    items: buildCheckoutCart(cart),
  };

  try {
    const data = await fetch(baseUrl + endpoint, {
      method: "POST",
      headers: {
        // Authorization: session.accessToken,
        "Content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    const res = await data.json();
    // console.log(res);
    return res;
  } catch (e) {
    console.error(e, "\n500: placeOrder");
    throw new Error(e.message ?? "Error placing order. Internal Server Error!");
  }
};
