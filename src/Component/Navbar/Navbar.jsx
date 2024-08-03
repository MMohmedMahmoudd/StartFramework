import {  Link, NavLink } from "react-router-dom"

export default function Navbar({ paddingTop }) {
  return (
    <>


<nav style={{ paddingTop }} className=" w-full py-2 fixed top-0 z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="Home" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-4xl uppercase font-bold dark:text-white">Start Framework </span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor"  d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
        <li>
          <NavLink to="About" className="block py-2 uppercase px-4 text-white rounded " aria-current="page">About</NavLink>
        </li>
        <li>
          <NavLink to="Portfolio" className="block py-2 uppercase px-4 text-white rounded">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="Contact" className="block py-2 uppercase px-4 text-white rounded">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}



