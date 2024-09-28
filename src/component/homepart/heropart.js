'use client'
import React from 'react'
import './style.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from 'next/image';

function Hero() {
  return (
    <div className='hero-part'>
        <div className='banner-item'>
            <div className='first-banner'>
                <Carousel fade className='carousel'>
                    <Carousel.Item  className='banner-carousel'>
                        <Images src="/laptop.jpg" width={1073} height={644} alt="..." className='bnr_img'  priority={true} />
                        
                    </Carousel.Item>
                    <Carousel.Item className='banner-carousel'>
                    <Images src="/laptop_2.jpg" width={1073} height={644} alt="..." className='bnr_img'  priority={true} />
                    
                    </Carousel.Item>
                    <Carousel.Item className='banner-carousel'>
                    <Images src="/Offers_3.png" width={1073} height={644} alt="..." className='bnr_img'  priority={true} />
                    
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='second-banner'>
                <div className='pc-gaming'>
                    <div className='pc-text'>
                        <p>Pc gaming collection</p>
                    </div>
                </div>
                <div className='camera'>
                    <div className='camera-text'>
                        <p>Camera collection</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
