import React from 'react'
import './style.css'
import HeadName from '../headname/headname'
import Images from 'next/image'
import { CategoryData } from './categoriesData'

export default function Categories() {
  return (
    <div className='category-part-one'>
      <HeadName>Category</HeadName>
      <div className='category-item-one'>
        {
            CategoryData.map((item, i)=>(
                <div className='items-one' key={i}>
                    <Images src={item.img} width={80} height={80} alt='icon_img'/>
                    <p>{item.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}