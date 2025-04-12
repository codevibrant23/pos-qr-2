const razorpayConfig = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
  name: "Mantra POS",
  description: "Enjoy your meal!",
  image: "/window.svg",
  theme: {
    color: "#F37254",
    backdrop_color: "#fff",
  },
  timeout: 600, // in seconds
  readonly: {
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
