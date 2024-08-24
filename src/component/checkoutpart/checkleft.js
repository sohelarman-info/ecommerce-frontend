'use client'
import { buyerInfo } from '@/validationform/Yup';
import { useFormik } from 'formik';
import React from 'react'

function Checkleft() {
    const initialState =
        {
            fname: "",
            lname: "",
            address: "",
            contactno: "",
            country: "",
            city: "",
            state: "",
            zipcode: "",
            comment: ""
        }

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: buyerInfo,
        onSubmit: values => {
          console.log(values);
          
        },
      });

    const {errors, touched} = formik;
  return (
    <div className='checkleft-box'>
        <div className='info'>
            <p>Buyer Info</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-row'>
                <div className='form-col'>
                     <label>First Name</label>
                     <input type='text' placeholder='Type Your Name' name='fname' value={formik.values.fname} onChange={formik.handleChange}/>
                     {errors.fname && touched.fname && <p className='cmnt-errors'>{errors.fname}</p>}
                </div>
                <div className='form-col'>
                     <label>last Name</label>
                     <input type='text' placeholder='Type Your Name' name='lname' value={formik.values.lname} onChange={formik.handleChange}/>
                     {errors.lname && touched.lname && <p className='cmnt-errors'>{errors.lname}</p>}
                </div>
            </div>
            <div className='form-row'>
                <div className='form-col'>
                     <label>Address</label>
                     <input type='text' placeholder='Type Your Address' name='address' value={formik.values.address} onChange={formik.handleChange}/>
                     {errors.address && touched.address && <p className='cmnt-errors'>{errors.address}</p>}
                </div>
                <div className='form-col'>
                     <label>Contact No.</label>
                     <input type='text' placeholder='Type Your Contact No' name='contactno' value={formik.values.contactno} onChange={formik.handleChange}/>
                     {errors.contactno && touched.contactno && <p className='cmnt-errors'>{errors.contactno}</p>}
                </div>
            </div>
            <div className='form-row'>
                <div className='form-col'>
                     <label>Country</label>
                     <input type='text' placeholder='Type Your Country' name='country' value={formik.values.country} onChange={formik.handleChange}/>
                     {errors.country && touched.country && <p className='cmnt-errors'>{errors.country}</p>}
                </div>
                <div className='form-col'>
                     <label>City</label>
                     <input type='text' placeholder='Type Your City' name='city' value={formik.values.city} onChange={formik.handleChange}/>
                     {errors.city && touched.city && <p className='cmnt-errors'>{errors.city}</p>}
                </div>
            </div>
            <div className='form-row'>
                <div className='form-col'>
                     <label>State</label>
                     <input type='text' placeholder='Type Your State' name='state' value={formik.values.state} onChange={formik.handleChange}/>
                     {errors.state && touched.state && <p className='cmnt-errors'>{errors.state}</p>}
                </div>
                <div className='form-col'>
                     <label>Zip Code</label>
                     <input type='text' placeholder='Type Your Zip Code' name='zipcode' value={formik.values.zipcode} onChange={formik.handleChange}/>
                     {errors.zipcode && touched.zipcode && <p className='cmnt-errors'>{errors.zipcode}</p>}
                </div>
            </div>
            <div className='note'>
                <label>Note</label>
                <textarea type="text" placeholder='Type Your Note' name='comment' value={formik.values.comment} onChange={formik.handleChange}/>
                {errors.comment && touched.comment && <p className='cmnt-errors'>{errors.comment}</p>}
            </div>
            {/* <button type='submit'> done </button> */}
        </form>
    </div>
  )
}

export default Checkleft
