import React from 'react'
import './style.css'
import { companyData } from './categoriesData'

function CompaniesName() {
  return (
    <div className='company_part'>
      <div className='company_item'>
            {
                companyData.map((item, i)=>(
                    <div key={i}><h3>{item.name}</h3></div>
                ))
            }
      </div>
    </div>
  )
}

export default CompaniesName