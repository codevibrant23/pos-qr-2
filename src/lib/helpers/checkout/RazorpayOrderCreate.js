"use server"

import { getTotalCartAmount } from "../cart/CartActions";

const Razorpay = require("razorpay");
const { nanoid } = require("nanoid");

export async function createOrder(cart) {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  const payment_capture = 1;
  const amount = getTotalCartAmount(cart);
  const currency = "INR";
  const options = {
    amount: (amount * 100).toString(),
    currency,
    receipt: nanoid(20),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);

    return {
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    };
  } catch (err) {
    return json(err);
  }
}
