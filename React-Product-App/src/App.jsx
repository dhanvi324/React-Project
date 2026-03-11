import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import RootLayout from './Components/RootLayout'
import Product from './Components/Product'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Productobj from './Components/Productobj'
export default function App() {
  const RouterObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'product',
          element:<Product/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
        {
          path:'productobj',
          element:<Productobj/>
        }
      ]
    }
  ])
  return <RouterProvider router={RouterObj}/>
}
