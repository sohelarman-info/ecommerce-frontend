import React from "react";
import "./style.css";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function CheckoutHeader() {
  return (
    <>
      <h3 className={montserrat.className + " " + " checkoutheader"}>
        Checkout
      </h3>
      <div
        className={
          poppins.className +
          " " +
          "progressCheckout d-flex justify-content-between align-items-center"
        }
      >
        <div className="mycart">
          <div className="listdesign">1</div>
          <span>My Cart</span>
        </div>
        <div className="mycartgap"></div>
        <div className="mycheckout">
          <div className="listdesign">2</div>
          <span>Checkout</span>
        </div>
      </div>
    </>
  );
}
