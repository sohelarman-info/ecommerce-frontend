'use client'
import React from 'react'
import Pagination from './pagination'
import Blogproduct from './blogproduct'

function Blogrightpart() {
  return (
    <div className='blg-right-part'>
       <Pagination itemsPerPage={4} />
    </div>
  )
}

export default Blogrightpart
