import Image from "next/image";
import React from "react";

function Collections() {
  return (
    <div className="collection">
      <div className="arrivals_head">
        <h3>Our Collection</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="clctn_items">
        <div className="items_one">
            <Image src="/computer_2.jpg" width={633} height={600} alt="Collection_img" className="cltn_img" priority={true}/>
            <div className="pc_game">
                <h3>PC Gaming Collection</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
            </div>
        </div>
        
        <div className="items_one">
            <Image src="/computer.jpg" width={633} height={600} alt="Collection_img" className="cltn_img" priority={true}/>
            <div className="pc_game">
                <h3>PC Gaming Collection</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
