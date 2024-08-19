"use client";
import React from "react";
import "./style.css";
import { Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { StateData } from "./StateData";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Checkoutform() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      country: "",
      city: "",
      state: "",
      zipcode: "",
      // email: "",
      note: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="mt-checkout">
      <form onSubmit={formik.handleSubmit} className={poppins.className}>
        <Row>
          <Col xs={8}>
            <h5>Buyer Info</h5>
            <hr className="hr-black" />
            <Row>
              <Col>
                <label htmlFor="firstName">First Name</label>
                <br />
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
              </Col>
              <Col>
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </Col>
            </Row>

            {/* if you wants to add email make sure remove the comment */}
            {/* 
          
             <div>
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>

            */}

            <Row>
              <Col>
                <label htmlFor="address">Address</label>
                <br />
                <input
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              </Col>
              <Col>
                <label htmlFor="contact">Contact</label>
                <br />
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.contact}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="country">Country</label>
                <br />
                <input
                  id="country"
                  name="country"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                />
              </Col>
              <Col>
                <label htmlFor="city">City</label>
                <br />
                <input
                  id="city"
                  name="city"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="state">State</label>
                <br />
                <select
                  id="state"
                  name="state"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                >
                  {StateData.map((item, i) => (
                    <>
                      <option key={i} value={item.name}>
                        {item.name}
                      </option>
                    </>
                  ))}
                </select>
              </Col>
              <Col>
                <label htmlFor="zipcode">Zip code</label>
                <br />
                <input
                  id="zipcode"
                  name="zipcode"
                  type="zipcode"
                  onChange={formik.handleChange}
                  value={formik.values.zipcode}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="note">Note</label>
                <br />
                <textarea
                  id="note"
                  name="note"
                  type="note"
                  onChange={formik.handleChange}
                  value={formik.values.note}
                />
              </Col>
            </Row>

            {/* <button type="submit">Submit</button> */}
          </Col>
          <Col>
            <div className="OrderSummery">
              <h4>Your Order Summary</h4>
              <div className="mt-5">
                <div className="products">
                  <div className="productsName">
                    <div className="productflex">
                      <div className="count">1x</div>
                      <div className="regular">USB Speaker Portable</div>
                    </div>
                    <div>$100.00</div>
                  </div>
                </div>
                <div className="products">
                  <div className="productsName">
                    <div className="productflex">
                      <div className="count">1x</div>
                      <div className="regular">USB Speaker Portable</div>
                    </div>
                    <div>$100.00</div>
                  </div>
                </div>
                <div className="products">
                  <div className="productsName">
                    <div className="productflex">
                      <div className="count">1x</div>
                      <div className="regular">USB Speaker Portable</div>
                    </div>
                    <div>$100.00</div>
                  </div>
                </div>
                <hr />
                <div className="othercheckcss">
                  <div>Subtotal</div>
                  <div>$300.00</div>
                </div>
                <div className="othercheckcss">
                  <div>Shipping</div>
                  <div>$15.00</div>
                </div>
                <div className="othercheckcss">
                  <div>Tax</div>
                  <div>$10.00</div>
                </div>
                <hr />
                <div className="othercheckcss">
                  <div>Total</div>
                  <div className="totalsumwithtax">$325.00</div>
                </div>
                <hr />
                <h4 className="payhead">Payment</h4>
                <div className="paybtn">
                  <button className="crec">Credit Card</button>
                  <button className="bat">Bank Transfer</button>
                  <button className="payp">Paypal</button>
                </div>
                <div className="BtnSubmition">
                  <button type="submit">Checkout</button>
                  <button className="norm">Back to Cart</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
}
