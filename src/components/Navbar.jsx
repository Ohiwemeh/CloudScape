import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes } from "react-icons/fa";
import { LiaUserSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import logo from "/public/image/snapchat-1212615081-removebg-preview.png";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "Shirt", path: "/404",},
    { title: "S-hoes", path: "/404" },
    { title: "Hoodies", path: "/404" },
    { title: "Trousers", path: "/404" },
    { title: "Belts", path: "/404" },
    { title: "TrackSuits", path: "/404" },
  ];
  return (
    <header className='w-screen xl:px-28 px-4 absolute top-0 right-0 left-0'>
      <nav className='flex justify-between items-center  md:py-4 pt-6 pb-3'>
        <a href="/">
          <img src={logo} height={100} width={100} alt="" />
        </a>
        <div className="relative  hidden md:flex items-center">
          <FaSearch className="w-5 h-5 mr-2 absolute right-0  cursor-pointer hidden md:block text-gray-500"/>
          <input type="text" name="search" placeholder="Search" autoComplete="off" aria-label="Search" className="  pl-3 h-12 w-96 rounded-2xl" />
        </div>

        <div className="text-lg text-black sm:flex items-center gap-16 hidden">
        <div className="flex items-center gap-6">
        <a href="/" className="flex items-center gap-2 hover:text-gray-700">
            <LiaUserSolid /> Account{" "}
          </a>
          <a href="/" className="flex items-center gap-2 hover:text-gray-700">
            <FaShoppingBag /> Cart{" "}
          </a>
        </div>

          <button className="bg-black text-white h-12 w-32 rounded-lg text-white cursor-pointer hover:bg-gray-700">Outfit Viewer</button>
        </div>

        {/* navbar for small devices */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-black" />
            ) : (
              <FaBars className="w-5 h-5 text-black" />
            )}
          </button>
        </div>


        
      </nav>
      <div>
        <ul className="lg:flex items-center gap-20 justify-center text-black hidden ">
          {navItems.map(({ title,path }) => (
            <li key={title}  className="hover:text-orange-500">
              <Link to={path} path="*">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
