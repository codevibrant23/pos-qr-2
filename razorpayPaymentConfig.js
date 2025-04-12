const razorpayConfig = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
  name: "Your Company Name",
  description: "Payment Description",
  image: "/logo.png",
  theme: {
    color: "#F37254",
    backdrop_color: "#000",
  },
  timeout: 600, // in seconds
  readonlyDefaults: {
    name: true,
    contact: true,
  },
  config: {
    display: {
      language: "en",
    },
  },
};

export default razorpayConfig;
