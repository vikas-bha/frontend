import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";

const NewClub = () => {

    
const formik = useFormik({
  initialValues : {
    clubName: '',
    clubEmail: '',
    address: '',
    zip: '',
    ownerPhone: '',
    clubPhone: '',
    subscriptionType: '',
    subscriptionStart: '',
    subscriptionEnd: '',
}, 
onSubmit: (values) => {
  console.log("form submitted");
  console.log(values);
},
})
    
    return (
      <>
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={formik.handleSubmit} className='bg-[#e3e2df] flex rounded-lg w-1/2 md:w-1/3 flex-col'>
            <h1 className='text-center font-semibold text-xl m-2 text-teal-500 border-b-2 border-cyan-700 p-2'>Let's create a new member, shall we?</h1>

              <div className='w-full flex flex-col pt-1 pl-2 pr-2'>
                <label htmlFor="name" className='text-black mr-4 mt-[10px]'>Name</label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter the Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                

              </div>

              <div className='w-full flex flex-col pt-1 pl-2 pr-2'>
                <label htmlFor="name" className='text-black mr-4 mt-[10px]'>Email</label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter the Club Email"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                

              </div>

              <div className='w-full flex flex-col pt-1 pl-2 pr-2'>
                <label htmlFor="name" className='text-black mr-4 mt-[10px]'>Address</label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter the Club Address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  onBlur={formik.handleBlur}
                />
                

              </div>

              <div className='w-full flex flex-col pt-1 pl-2 pr-2'>
                <label htmlFor="name" className='text-black mr-4 mt-[10px]'>Zipcode</label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter the Zip Code"
                  onChange={formik.handleChange}
                  value={formik.values.zip}
                  onBlur={formik.handleBlur}
                />
                

              </div>
              <div className='w-full flex flex-col pt-1 pl-2 pr-2'>
                <label htmlFor="name" className='text-black mr-4 mt-[10px]'>Owner Phone</label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter the Owner's Phone Number"
                  onChange={formik.handleChange}
                  value={formik.values.ownerPhone}
                  onBlur={formik.handleBlur}
                />
                

              </div>

              <div className='w-full flex flex-col pt-1 pl-2 pr-2'>
                <label htmlFor="name" className='text-black mr-4 mt-[10px]'>Club Phone</label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter your Club's Phone Number "
                  onChange={formik.handleChange}
                  value={formik.values.clubPhone}
                  onBlur={formik.handleBlur}
                />
                

              </div>

              <div className='w-full flex flex-col pt-1 pl-2 pr-2'>
                <label htmlFor="name" className='text-black mr-4 mt-[10px]'>Subscription Type</label>
                {/* <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter Subscription Type"
                  onChange={formik.handleChange}
                  value={formik.values.subscriptionType}
                  onBlur={formik.handleBlur}
                /> */}
                <select name="subscriptionType" 
                className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                placeholder="Enter Subscription Type"
                onChange={formik.handleChange}
                value={formik.values.subscriptionType}
                onBlur={formik.handleBlur}>
                  <option value="" selected>Select the subscription Type</option>
                      <option>1</option>
                  <option>2</option>
                  <option>3</option>


                </select>
                

              </div>

              <div className='w-full flex flex-col pt-1 pl-2 pr-2'>
                <label htmlFor="name" className='text-black mr-4 mt-[10px]'>Subscription Start</label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                  type="date"
                  name="name"
                  placeholder="Enter your Club Address"
                  onChange={formik.handleChange}
                  value={formik.values.subscriptionStart}
                  onBlur={formik.handleBlur}
                />
                

              </div>

              <div className='w-full flex flex-col pt-1 pl-2 pr-2'>
                <label htmlFor="name" className='text-black mr-4 mt-[10px]'>Subscription End</label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                  type="date"
                  name="name"
                  placeholder="Enter your Club Address"
                  onChange={formik.handleChange}
                  value={formik.values.subscriptionEnd}
                  onBlur={formik.handleBlur}
                />
                

              </div>

              <button
                type="submit"
                className="bg-teal-500 font-latoBold text-sm text-white py-3 my-3 mx-auto flex justify-center rounded-lg w-1/2"
              >
                    Done!!!!
                </button>


            </form>


        </div>
      </>
        
  
    )
}

export default NewClub