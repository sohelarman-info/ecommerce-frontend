import React from 'react'
import './style.css'
import HeadName from '../headname/headname'
import Images from 'next/image'
import { CategoryData } from './categoryData'

export default function Category() {
  return (
    <div className='category-part'>
      <HeadName>Category</HeadName>
      <div className='category-item'>
        {
            CategoryData.map((item, i)=>(
                <div className='items' key={i}>
                    <Images src={item.img} width={80} height={80} alt='icon_img'/>
                    <p>{item.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}
