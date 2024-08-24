import React from 'react'
import './style.css'
import Checkleft from './checkleft'
import Checkright from './checkright'

function Checkout() {
  return (
    <div className='check-part'>
        <div className='breadcrumb'>
          <ul>
              <li className='brdcmb-list'><a href='/'>Home</a></li>
              <li className='brdcmb-list'><a href='/pages/cart'>My Cart</a></li>
              <li className='brdcmb-list'>CheckOut</li>
          </ul>
        </div>
        <div className='check-head'>
            <h3>CheckOut</h3>
        </div>
        <div className='check-checkout'>
          <div className='carts'>
            <div className='one'>1</div>
            <p>My Cart</p>
          </div>
          <div className='checkout'>
            <div className='two'>2</div>
            <p>checkout</p>
          </div>
        </div>

        <div className='checkout-all-part'>
          <div className='check-left'>
            <Checkleft/>
          </div>
          <div className='check-right'>
            <Checkright/>
          </div>
        </div>
    </div>
  )
}

export default Checkout
