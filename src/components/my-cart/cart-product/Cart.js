"use client";
import { Col, Row } from "react-bootstrap";
import "../style.css";
import { productData } from "../data";
import { useEffect, useState } from "react";
import ProductMap from "./ProductMap";
import ProductRight from "./ProductRight";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [toogle, setToogle] = useState(false);

  return (
    <Row className="">
      <Col xs={8} className="last-border">
        <div className="mt-4">
          <div className="d-flex mb-3 align-items-center">
            <input type="checkbox" />
            <p className="m-0 ms-2 text-gray">Select All</p>
          </div>
          {productData.map((item, i) => (
            <div key={i}>
              <ProductMap
                price={item.price}
                image={item.image}
                name={item.name}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                setToogle={setToogle}
                toogle={toogle}
              />
            </div>
          ))}
        </div>
      </Col>
      <Col>
        <ProductRight totalPrice={totalPrice} />
      </Col>
    </Row>
  );
};

export default Cart;
