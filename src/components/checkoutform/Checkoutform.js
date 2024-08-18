"use client";
import React from "react";
import "./style.css";
import { Col, Row } from "react-bootstrap";
import { useFormik } from "formik";

export default function Checkoutform() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <h5>Buyer Info</h5>
      <hr className="hr-black" />
      <Row>
        <Col xs={8}>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <button type="submit">Submit</button>
          </form>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
