"use client";
import React, { useState } from "react";
import SearchPagination from "./SearchPagination";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import ListPost from "./ListView/ListPost";

function Searchright() {
  const [viewPost, setViewPost] = useState("List")
  console.log(viewPost);
  
  return (
    <div className="blg-right-part">
      <div className="count_product">
        <div>
          <p>Viewing 20 of 100 Product</p>
        </div>
        <div className="list_grid_part">
          <div className={`list ${viewPost === "List" ? "activeList" : "list"}`} onClick={()=>setViewPost("List")}>
            <FaList />
          </div>
          <div className={`grid ${viewPost != "List" ? "activeList" : "grid"}`} onClick={()=>setViewPost("Grid")}>
            <IoGridSharp />
          </div>
          <div>
            <div className="brnds_name">
              <span>Short by:</span>
              <select>
                <option>Newest Items</option>
                <option>Computer & Laptop</option>
                <option>Mobile</option>
                <option>TV</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {
          viewPost === "Grid" ? 
          <SearchPagination itemsPerPage={3} />
          : <ListPost />
        }
      </div>
    </div>
  );
}

export default Searchright;
