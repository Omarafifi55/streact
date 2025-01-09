import { React } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import  Content from "./Components/Contect/Content";
import Portfolio from './Components/Portfolio/Portfolio'
import Nav from './Components/nav/Nav'

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'

const routes = createBrowserRouter([
  {path:'/',element:<Home />},
  {path:'/Home',element:<Home />},
  {path:'/About',element:<About />},
  {path:'/Portfolio',element:<Portfolio />},
  {path:'/Content',element:<Content />}
  ,{path:'*',element:<div className='bg-danger'>NOt FOund </div>}
  
])

function App() {

  return (

    <>


<RouterProvider router={routes} />    
    </>
  );
}

export default App
