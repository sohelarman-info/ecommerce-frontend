'use client'
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";

function Relatedpost() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1299,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]
      };
  return (
    <div className='reltd-elements'>
        <h3>Related Post</h3>
        <div className='rltd-all-items'>
            <div className="slider-container">
                <Slider {...settings}>
                <div className='rltd-product-item'>
                    <div className='rltd-product-img'>
                        <Image src='/Offers_4.png' width={300} height={300} alt='rltd-product'/>
                    </div>
                    <div className='rltd-product-text'>
                        <h3>5 Latest Invention that Provide Life Convenience</h3>
                        <div className='admin'>
                            <p><span>Admin</span>- 12 June 2021</p>
                        </div>
                    </div>
                </div>
                <div className='rltd-product-item'>
                    <div className='rltd-product-img'>
                        <Image src='/Offers_3.png' width={300} height={300} alt='rltd-product'/>
                    </div>
                    <div className='rltd-product-text'>
                        <h3>5 Latest Invention that Provide Life Convenience</h3>
                        <div className='admin'>
                            <p><span>Admin</span>- 12 June 2021</p>
                        </div>
                    </div>
                </div>
                <div className='rltd-product-item'>
                    <div className='rltd-product-img'>
                        <Image src='/Offers_2.png' width={300} height={300} alt='rltd-product'/>
                    </div>
                    <div className='rltd-product-text'>
                        <h3>5 Latest Invention that Provide Life Convenience</h3>
                        <div className='admin'>
                            <p><span>Admin</span>- 12 June 2021</p>
                        </div>
                    </div>
                </div>
                <div className='rltd-product-item'>
                    <div className='rltd-product-img'>
                        <Image src='/offers_1.png' width={300} height={300} alt='rltd-product'/>
                    </div>
                    <div className='rltd-product-text'>
                        <h3>5 Latest Invention that Provide Life Convenience</h3>
                        <div className='admin'>
                            <p><span>Admin</span>- 12 June 2021</p>
                        </div>
                    </div>
                </div>
                <div className='rltd-product-item'>
                    <div className='rltd-product-img'>
                        <Image src='/arraivals 4.png' width={300} height={300} alt='rltd-product'/>
                    </div>
                    <div className='rltd-product-text'>
                        <h3>5 Latest Invention that Provide Life Convenience</h3>
                        <div className='admin'>
                            <p><span>Admin</span>- 12 June 2021</p>
                        </div>
                    </div>
                </div>
                <div className='rltd-product-item'>
                    <div className='rltd-product-img'>
                        <Image src='/arraivals 5.png' width={300} height={300} alt='rltd-product'/>
                    </div>
                    <div className='rltd-product-text'>
                        <h3>5 Latest Invention that Provide Life Convenience</h3>
                        <div className='admin'>
                            <p><span>Admin</span>- 12 June 2021</p>
                        </div>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Relatedpost
