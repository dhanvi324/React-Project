import React from 'react'
import { useLocation } from 'react-router'
export default function Productobj() {
    const {state}=useLocation()
    console.log(state?.productobj)

  return (
    <div className='flex justify-between'>
        <div className='w-2/5'>
            <img src={state?.productobj?.image} className='w-full' alt="" />
        </div>
        <div className='w-3/5 p-2 sm:p-10'>
        <p className='text-2xl'>{state?.productobj?.title}</p>
        <p className='mb-10 mt-10'>{state?.productobj?.description}</p>
        <p className='text-2xl mb-10'>Price : {state?.productobj?.price}</p>
        <p className='text-2xl'>Categorgy : {state?.productobj?.category}</p>
        </div>
    </div> 
  )
}
// state managemnent means sharing state accross appllicatiton and achieving sync int the state accross appication
// prop driling
//context api,if chnages are made then it will be broadcasted to evry component;it is separate from tree

