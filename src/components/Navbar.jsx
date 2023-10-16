import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative top-0 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-[url('./img/Bg.png')]">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="http://localhost:3000/#pablo"
          >
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 lg:mx-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 lg:mt-3"
                href="http://localhost:3000/#home"
              >
                <span className="ml-2 text-black hover:text-teal-500">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 lg:mx-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75  lg:mt-3"
                href="http://localhost:3000/#howItWorks"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2 text-black hover:text-teal-500">How it works</span>
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 lg:mx-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 lg:mt-3"
                to="/#whyUs"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2 text-black hover:text-teal-500">Why Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="px-3 lg:mx-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 lg:mt-3"
                href="http://localhost:3000/#reviews"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2 text-black hover:text-teal-500">Reviews</span>
              </a>
            </li>
            <li className="nav-item lg:my-2 lg:ps-3"></li>
            <li className="nav-item border-solid border-gray-400 lg:border-s-2 lg:my-2 lg:ps-3"></li>
            <li className="nav-item">
              <Link
                className="px-3 lg:mx-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/#loveChat"
              >
                <button type="button" className="border-solid border-black border-2 font-bold text-white rounded-2xl hover:bg-teal-500 hover:border-white"><p className="text-xs md:text-base text-black hover:text-white py-2 px-7">Live Chat</p>
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="px-3 lg:mx-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="http://localhost:3000/#contactUs"
              >
                <button type="button" className="border-solid border-black border-2 font-bold text-white rounded-2xl hover:bg-teal-500 hover:border-white"> <p className="text-xs md:text-base text-black hover:text-white py-2 px-7">Contact Us</p>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}