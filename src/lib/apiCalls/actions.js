"use server";

import { buildCheckoutCart } from "../helpers/checkout/checkout";

const baseUrl = process.env.baseUrl;

export const placeOrder = async ({ cart, paymentResponse, userData }) => {
  if (!paymentResponse) return;

  const endpoint = "";

  const orderData = {
    address: "",
    mode: userData?.method,
    customer: {
      name: userData?.name,
      phone: userData?.contact,
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
      body: orderData,
    });
    const res = await data.json();

    return res;
  } catch (e) {
    console.Error(e, "\n500: login");
    throw new Error(e.message ?? "Error placing order. Internal Server Error!");
  }
};
