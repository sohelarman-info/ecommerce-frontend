"use client";
import { productData } from "../data";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  priceDecriment,
  priceIncrements,
  totalPrice,
} from "@/Redux/priceSlice";
const ProductMap = ({ image, name, price }) => {
  const [productPrice, setProductPrice] = useState(price);
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();

  if (productQuantity < 1 && productPrice < price) {
    setProductQuantity(1);
    setProductPrice(price);
  }
  const handleIncriment = () => {
    setProductQuantity(productQuantity + 1);
    setProductPrice(productPrice + price);
    dispatch(priceIncrements(price));
  };

  const handleDecremint = () => {
    setProductQuantity(productQuantity - 1);
    setProductPrice(productPrice - price);
    dispatch(priceDecriment(price));
  };
  const handlePrice = () => {
    let cost = 0;
    productData.map((item) => {
      cost += productQuantity * price;
    });
    dispatch(totalPrice(cost));
  };
  useEffect(() => {
    handlePrice();
  }, []);
  return (
    <div className="d-flex products py-2 align-items-center justify-content-between">
      <div className="d-flex align-items-center justify-content-center">
        <input type="checkbox" className="text-red map-input" />
        <Image
          width={130}
          height={130}
          src={image}
          className="box-180 mx-5"
          alt="Product Image"
        />
        <div>
          <h5>{name}</h5>
          <h5 className="text-red">${productPrice}</h5>
          <div className="d-flex ">
            {productQuantity > 1 ? (
              <div
                onClick={() => handleDecremint()}
                className="counter-btn counter-gray-btn text-gray d-flex justify-content-center align-items-center"
              >
                <FaMinus />
              </div>
            ) : (
              <div className="counter-btn counter-gray-btn text-gray d-flex justify-content-center align-items-center">
                <FaMinus />
              </div>
            )}

            <span className="text-red px-3 text-center align-content-center">
              {productQuantity}
            </span>
            <div
              onClick={() => handleIncriment()}
              className="counter-btn text-white  bg-red d-flex justify-content-center align-items-center"
            >
              <FaPlus />
            </div>
          </div>
        </div>
      </div>

      <IoClose className="text-red pointer" size={25} />
    </div>
  );
};

export default ProductMap;
