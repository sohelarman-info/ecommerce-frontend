import { Col, Row } from "react-bootstrap";
import { productData } from "../data";
import "../style.css";
// import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductList = () => {
  return (
    <Row>
      <Col xs={8}>
        <div>
          {productData.map((item, i) => (
            <div className="d-flex align-items-center" key={i}>
              <input type="checkbox" className="text-red" />
              <img
                src={item.image}
                className="box-180 mx-5"
                alt="Product Image"
              />
              <div>
                <h5>{item.name}</h5>
                <h5 className="text-red">{item.price}</h5>
                <div className="d-flex ">
                  <div className="counter-btn counter-gray-btn text-gray d-flex justify-content-center align-items-center">
                    <FaMinus />
                  </div>
                  <span className="text-red px-3 text-center align-content-center">
                    1
                  </span>
                  <div className="counter-btn text-white  bg-red d-flex justify-content-center align-items-center">
                    <FaPlus />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Col>
      <Col>awd</Col>
    </Row>
  );
};

export default ProductList;
