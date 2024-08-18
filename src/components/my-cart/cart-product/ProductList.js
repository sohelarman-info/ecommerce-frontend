import { Col, Row } from "react-bootstrap";
import { productData } from "../data";

const ProductList = () => {
  return (
    <Row>
      <Col xs={8}>
        <div>
          {productData.map((item, i) => (
            <div className="d-flex" key={i}>
              <input type="radio" />
              <img src={item.image} className="box-56" alt="Product Image" />
              <h2>{item.name}</h2>
              <h2>{item.price}</h2>
            </div>
          ))}
        </div>
      </Col>
      <Col>awd</Col>
    </Row>
  );
};

export default ProductList;
