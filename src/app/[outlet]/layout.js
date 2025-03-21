import CartWrapper from "@/components/Cart/CartWrapper";
import React from "react";

export default function OutletMainLayout({ children }) {
  return (
    <div>
      <div className="pb-20">{children}</div>
      {/* <footer className="relative text-white bg-transparent">
        <div
          className="absolute top-0 left-0 w-full overflow-hidden bg-orange-400 h-40"
          style={{ transform: "translateY(-100%)" }}
        >
          <svg
            className="w-full h-16 text-orange-500"
            style={{ transform: "scaleY(-1)" }}
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0,96L60,117.3C120,139,240,181,360,170.7C480,160,600,96,720,101.3C840,107,960,181,1080,202.7C1200,224,1320,192,1380,176L1440,160V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
            ></path>
          </svg>
        </div>

        Footer Content 
        <div className="pt-16 pb-8 text-center">
          <p className="text-lg">© 2025 Your Company. All rights reserved.</p>
        </div>
      </footer> */}
      <div className="bottom-0 left-0 w-screen fixed z-10">
        <CartWrapper />
      </div>
    </div>
  );
}
