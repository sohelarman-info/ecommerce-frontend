import React from 'react'
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { TfiCommentAlt } from "react-icons/tfi";
import Image from 'next/image';

function Blgdtlsrightpart() {
  return (
    <div className='blg-dtls-right-part'>
      <h3>6 Best Smartphone for e-Sport Pro Player</h3>
      <div className='admin-cmnt-part'>
        <div className='timing'>
          <SlCalender/>
          <p>12 JUNE 2021</p>
        </div>
        <div className='timing'>
          <CiUser/>
          <p>Admin</p>
        </div>
        <div className='timing'>
          <TfiCommentAlt/>
          <p>Comment</p>
        </div>
      </div>

      <div className='comnt-img'>
        <Image src='/Ad_3.png' width={1000} height={400} alt='cmnt-img' style={{objectFit: "cover"}}/>
      </div>
    </div>
  )
}

export default Blgdtlsrightpart
