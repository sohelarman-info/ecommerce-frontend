import Image from "next/image";
import React from "react";
import { blogData } from "./categoriesData";

function Blog() {
  return (
    <div className="blg_part">
      <div className="arrivals_head">
        <h3>Blog</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="blg_items">
        {blogData.map((item, i) => (
          <div className="items_blg" key={i}>
            <div className="blog_imgs">
              <Image
                src={item.img}
                width={300}
                height={320}
                alt="blog_img"
                className="blg_img"
                priority={true}
              />
            </div>
            <h3>{item.blghead}</h3>
            <p>
              by <span>{item.admin}</span>, 12 Jan 2021
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
