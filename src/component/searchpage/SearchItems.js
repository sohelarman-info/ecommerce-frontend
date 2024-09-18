import React from "react";
import AllCategories from "./AllCategories";
import Searchright from "./Searchright";

function SearchItems() {
  return (
    <div className="srch_boxes">
        <div className="latest_srch">
            <div className="ltst_srch">
                <h3>Your Latest Search</h3>
                <div className="srch_items">
                  <button>Smart Phone</button>
                  <button>Laptop</button>
                  <button>Head Phone</button>
                </div>
            </div>
        </div>
      <div className="row">
        <div className="col-lg-3">
          <AllCategories />
        </div>
        <div className="col-lg-9">
          <Searchright/>
        </div>
      </div>
    </div>
  );
}

export default SearchItems;
