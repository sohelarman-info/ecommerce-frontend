"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { motion } from "framer-motion";

function HomeMenu() {
  return (
    <div className="menubar">
      <div className="prjt-name">
        <Link href="/" className="link">
          <h2>Tronix</h2>
        </Link>
      </div>
      <div className="all-menu-one">
        <Navbar expand="lg" className="nav_menu">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="menu_toggole"
          />
          <Navbar.Collapse className="menu-list">
            <Nav className="mx-auto">
              <NavDropdown
                title="Home"
                id="basic-nav-dropdown"
                className="list-type"
              >
                <NavDropdown.Item href="/">Home 1</NavDropdown.Item>
                <NavDropdown.Item href="/pages/home">Home 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/pages/about" className="list-type">
                About
              </Nav.Link>
              <Nav.Link href="/pages/product" className="list-type">
                Product
              </Nav.Link>
              <NavDropdown
                title="Blog"
                id="basic-nav-dropdown"
                className="list-type"
              >
                <NavDropdown.Item href="/pages/blog">
                  Blog List
                </NavDropdown.Item>
                <NavDropdown.Item href="/pages/blogdetails">
                  Blog Details
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/pages/contact" className="list-type">
                Contact
              </Nav.Link>
                <Nav.Link href="/pages/signup" className="list-type2">
                  Sign Up
                </Nav.Link>
                
                <Nav.Link href="/pages/signin" className="list-type2">
                  Sign In
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="search-bar-one">
        <Link href="/pages/search" className="link">
          <div className="search-icon-one">
            <FaSearch className="srch_home_icon-one" />
          </div>
        </Link>
      </div>
      <div className="shopping-element-one">
        <div className="shopping-icon-one">
          <MdOutlineShoppingBag />
          <div className="number-one">
            <p>99</p>
          </div>
        </div>
        <div className="shopping-icon-one">
          <MdMailOutline />
        </div>
      </div>
      <div className="sign_btn-one">
        <Link href="/pages/signin" className="sign_up">
        <motion.div whileTap={{ scale: 0.8 }}>
          <button className="sign_in">
            <p>Sign In</p>
          </button>
          </motion.div>
        </Link>
        <Link href="/pages/signup" className="sign_up">
          <motion.div whileTap={{ scale: 0.8 }}>
          <button className="sign_up_btn">
            <p>Sign Up</p>
          </button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default HomeMenu;
