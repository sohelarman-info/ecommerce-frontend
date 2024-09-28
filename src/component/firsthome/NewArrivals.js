import React from 'react'
import './style.css'
import Images from 'next/image'
import { newArraivals } from './categoriesData'

function NewArraivalsPart() {
  return (
    <div className='arrivals-part-one'>
        <div className='arrivals_head'>
            <h3>NewArrivals</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className='arraivals-items-one'>
            {
                newArraivals.map((item, i)=>(
                    <div className='items-list-one' key={i}>
                        <div className='items-img-one'>
                            <Images src={item.img} width={500} height={300} alt='newArraivals' className='arraivals_img' priority={true}/>
                            <div className='item-tag-one'>
                                <p>{item.tag}</p>
                            </div>
                        </div>
                        <div className='item-text-one'>
                            <h4>{item.devicename}</h4>
                            <h3>{item.rate}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewArraivalsPart