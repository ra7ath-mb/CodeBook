import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Search from "../Sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from "../index";
import {useCart} from '../../context'

const Header = () => {
  const {cartList} = useCart();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false,
  );
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"))

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -tofp-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
            {/* Dropdown for logged in user */}
            {isDropdownOpen && (token ? <DropdownLoggedIn setIsDropdownOpen={setIsDropdownOpen} /> : <DropdownLoggedOut setIsDropdownOpen={setIsDropdownOpen}/>) }
          </div>
        </div>
      </nav>
      {isSearchOpen && <Search setIsSearchOpen={setIsSearchOpen} />}
    </header>
  );
};

export default Header;
