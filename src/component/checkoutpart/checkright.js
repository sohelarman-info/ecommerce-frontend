'use client'
import React, { useState } from 'react'
import { allprice, checkdata, totalprice } from './checkoutdata'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Checkright() {
  const [isActive, setActive] = useState();

  const handleClick = (e) => {
    setActive(e.target.id)
  }
  return (
    <div className='checkout-right-part'>
      <div className='right-box'>
        <div className='heading'>
          <h3>Your Order Summary</h3>
        </div>
        {
          checkdata.map((item, i)=> (
            <div className='pro-rates' key={i}>
              <div className='pro-type'>
                <p>{item.proquantity}</p>
                <p>{item.proname}</p>
              </div>
              <p>{item.proprice}</p>
            </div>
          ))
        }

        <div className='all-amount'>
          {
            allprice.map((item, i)=> (
              <div className='pro-rates' key={i}>
                  <p>{item.subproname}</p>
                <p>{item.subprice}</p>
              </div>
            ))
          }
        </div>

        <div className='total-amount'>
          {
            totalprice.map((item, i)=> (
              <div className='pro-rates' key={i}>
                  <h3>Total</h3>
                <p className='total-price'>{item.totalprice}</p>
              </div>
            ))
          }
        </div>

        <div className='payment'>
          <h3>Payment</h3>
          <div className='payment-mathod'>
            <div className={isActive === "1" ? "active" : "pay-card"} id={"1"} key={1} onClick={handleClick}>
              Credit Card
            </div>
            <div className={isActive === "2" ? "active" : "pay-card"} id={"2"} key={2} onClick={handleClick}>
              Bank Transfer
            </div>
            <div className={isActive === "3" ? "active" : "pay-card"} id={"3"} key={3} onClick={handleClick}>
              Paypal
            </div>
          </div>
        </div>

        <div className='check-btns'>
          <a href='#'>
            <button>CheckOut</button>
          </a>
        </div>

        <div className='cart-btns'>
          <a href='/pages/cart'>
            <button>Back to Cart</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Checkright
