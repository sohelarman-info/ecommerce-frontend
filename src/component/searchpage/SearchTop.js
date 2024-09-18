import React from "react";
import "./style.css";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

function SearchTop() {
  return (
    <div className="search_details">
      <div className="search_top">
        <h1>What are you looking for?</h1>
        <div className="search_elements">
          <div className="dshbrd_icons">
            <Image
              src="/Dashboard.svg"
              width={30}
              height={30}
              alt="DashBoard_img"
            />
          </div>
          <div className='srch-bar'>
            <div className='srch-box'>
                <input type='text' placeholder='Search item here..'/>
                <div className='srch-icon'>
                    <FaSearch/>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SearchTop;
