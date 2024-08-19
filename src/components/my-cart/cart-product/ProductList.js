"use client";
import { Col, Row } from "react-bootstrap";

import "../style.css";
import { productData } from "../data";

import { useState } from "react";
import ProductMap from "./ProductMap";
import ProductRight from "./ProductRight";

const ProductList = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Row className="">
      <Col xs={8} className="last-border">
        <div className="mt-4">
          {productData.map((item, i) => (
            <div key={i}>
              <ProductMap
                price={item.price}
                image={item.image}
                name={item.name}
              />
            </div>
          ))}
        </div>
      </Col>
      <Col>
        <ProductRight />
      </Col>
    </Row>
  );
};

export default ProductList;
