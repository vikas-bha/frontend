import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

   
  return (
    <>
    <div className='w-full flex justify-between border p-4  font-medium text-2xl text-teal-500  border-gray-700 border-b-3'>
        <div>Logo</div>
        <div>Welcome to club daddy</div>
        <div>Logout</div>
       
    </div>
    <div className='grid grid-cols-4'>

<div className='col-span-1 border-gray-700 border-r-4 h-screen'>
    sidebar
</div>
 <div className='col-span-3 p-4 w-full flex justify-center max-h-2 '>
    <Link to="/new-club">
    <button   className='bg-teal-500 cursor-pointer rounded-full p-5 text-white '>Create a new Club</button>
    </Link>

</div>
</div>
    </>
   
  )
}

export default Dashboard