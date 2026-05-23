import React from 'react'
import { NavLink } from 'react-router'
export default function Header() {
  return (
    <div className='flex justify-between px-10 items-center bg-gray-300'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyK9oaIYnSWqW3waOIj14bUudBZ_8KoWIlw&s" width="50px" className='w-50%' alt="" />
        <ul className='flex justify-between gap-10'>
            <li>
                <NavLink to="" className={({isActive})=>isActive?"text-blue-500":"text-red-500"}>Home</NavLink>
            </li>
            <li>
                <NavLink to="product" className={({isActive})=>isActive?"text-blue-500":"text-red-500"}>Product</NavLink>
            </li>
            <li>
                <NavLink to="contact" className={({isActive})=>isActive?"text-blue-500":"text-red-500"}>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}
