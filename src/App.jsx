import './App.css'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Layout  from './Component/Layout/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from './Component/Portfolio/Portfolio'


let x = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {path:'*',element:<Home/>},
    {path:'Home',element:<Home/>},
    {path:'About',element:<About/>},
    {path:'Contact',element:<Contact/>},
    {path:'Portfolio',element:<Portfolio/>},
  ]}
])


function App() {

  return <RouterProvider router={x}></RouterProvider>
}

export default App
