"use client";
import { productData } from "../data";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
const ProductMap = ({ image, name, price }) => {
  const [priductPrice, setProductPrice] = useState(price);
  const [priductQuantity, setPriductQuantity] = useState(1);

  const handleIncriment = () => {
    setPriductQuantity(priductQuantity + 1);
    setProductPrice(priductPrice + price);
  };

  return (
    <div className="d-flex products py-2 align-items-center justify-content-between">
      <div className="d-flex align-items-center justify-content-center">
        <input type="checkbox" className="text-red" />
        <Image
          width={130}
          height={130}
          src={image}
          className="box-180 mx-5"
          alt="Product Image"
        />
        <div>
          <h5>{name}</h5>
          <h5 className="text-red">{priductPrice}</h5>
          <div className="d-flex ">
            <div className="counter-btn counter-gray-btn text-gray d-flex justify-content-center align-items-center">
              <FaMinus />
            </div>

            <span className="text-red px-3 text-center align-content-center">
              {priductQuantity}
            </span>
            <div
              onClick={handleIncriment}
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
