import React from 'react'
import HeadName from '../headname/headname'
import Headviewall from '../headviewall/headviewall'
import './style.css'
import Images from 'next/image'
import { newArraivals } from './categoryData'

function NewArraivals() {
  return (
    <div className='arrivals-part'>
        <Headviewall>
            <HeadName>New Arraivals</HeadName>
            <p className='view-text'>View All</p>
        </Headviewall>
        <div className='arraivals-items'>
            {
                newArraivals.map((item, i)=>(
                    <div className='items-list' key={i}>
                        <div className='items-img'>
                            <Images src={item.img} width={230} height={290} alt='newArraivals'/>
                            <div className='item-tag'>
                                <p>{item.tag}</p>
                            </div>
                        </div>
                        <div className='item-text'>
                            <h4>{item.devicename}</h4>
                            <h3>{item.rate}</h3>
                            <div className='rating'>
                                <Images src={item.star} width={20} height={20} alt='star'/>
                                <p>{item.sold}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewArraivals
