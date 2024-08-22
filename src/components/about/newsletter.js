import React from "react";
import NewsLetterIcon from "../../../public/assets/svg/newsletter";
import { Col, Row } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-details">
        <div>
          <NewsLetterIcon />
        </div>
        <div className="newsletter-title">
          <h4>Join our newsletter now!</h4>
          <p>Register now and get our latest updates and promos.</p>
        </div>
      </div>

      <div className="newsletter-input">
        <input type="text" placeholder="Enter your email" />
        <button>Join</button>
      </div>
    </div>
  );
};

export default NewsLetter;
