import { Link, NavLink } from  "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { useState, useContext } from "react";
import { MdClose, MdMenu } from "react-icons/md"
import { FaOpencart } from "react-icons/fa"
import { ShopContext } from "../Context/ShopContext";
const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => setMenuOpened(!menuOpened);
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <header className = "fixed top-0 left-0 right-0 m-0 mx-auto w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="px-6 lg:px-20 flexBetween py-4">
          {/* logo */}
          <div className="flex items-center">
            <Link className="flex items-center gap-2"> 
              <img src={logo} height={40} width={40} className="rounded-lg shadow-sm"></img>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">ShopHub</span>
            </Link>
          </div>
          
          {/* Navbar Desktop */}
          <Navbar containerStyles={"hidden md:flex gap-x-8 xl:gap-x-12 medium-15"}/>
          
          {/* Navbar Mobile */}
          <div className={`md:hidden ${menuOpened ? "flex flex-col gap-y-8 fixed top-20 right-6 p-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl w-72 medium-16 border border-gray-100 transition-all duration-300 z-40" : 
          "hidden"}`}>
            <Navbar containerStyles={"flex flex-col gap-y-8"}/>
          </div>
          
          <div className="flexBetween gap-x-4">
              {/* Mobile Menu Toggle */}
              {!menuOpened? (
                <MdMenu className="md:hidden cursor-pointer hover:text-orange-500 p-2 h-10 w-10 rounded-full hover:bg-orange-50 transition-all duration-300" onClick = {toggleMenu}/>
              ) : (
                <MdClose className="md:hidden cursor-pointer hover:text-orange-500 p-2 h-10 w-10 rounded-full hover:bg-orange-50 transition-all duration-300" onClick = {toggleMenu}/>)}
              
              {/* Action Buttons */}
              <div className="flexBetween gap-x-4">
                {/* Cart */}
                <NavLink to={"cart-page"} className={"relative group"}>
                  <div className="p-2 h-10 w-10 rounded-full bg-orange-50 hover:bg-gray-50 transition-all duration-300 flexCenter">
                    <FaOpencart className="text-orange-600 group-hover:text-gray-500 transition-colors duration-300"/>
                  </div>
                  <span className="absolute -top-1 -right-1 flexCenter w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold shadow-sm">
                    {getTotalCartItems()}
                  </span>
                </NavLink>
                
                {/* Auth Buttons */}
                <div className="hidden sm:flex gap-x-3">
                  <NavLink to={'signup'} className={"px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"}>
                    Đăng ký
                  </NavLink>
                  <NavLink to={'login'} className={"px-6 py-2 border-2 border-orange-200 hover:border-orange-300 text-orange-600 hover:text-orange-700 rounded-full font-semibold transition-all duration-300 hover:bg-orange-50"}>
                    Đăng nhập
                  </NavLink>
                </div>
              </div>
          </div>
        </div>
    </header>
  )
}

export default Header